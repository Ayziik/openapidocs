import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const splitRoot = path.join(process.cwd(), 'openapi');
const outFile = path.join(process.cwd(), 'api.tmp.yaml');
const apiServer = 'https://openapi.keycrm.app/v1';

function readYaml(file) {
  return yaml.parse(fs.readFileSync(file, 'utf8'));
}

const root = readYaml(path.join(splitRoot, 'openapi.yaml'));

// Resolve tags
const resolvedTags = [];
for (const tagRef of (root.tags || [])) {
  if (tagRef.$ref) {
    const tag = readYaml(path.join(splitRoot, tagRef.$ref.replace(/^\.\//, '')));
    resolvedTags.push(tag);
  }
}

// Resolve paths
const pathsIndex = readYaml(path.join(splitRoot, 'paths/index.yaml'));
const paths = {};
for (const file of (pathsIndex.include || [])) {
  const map = readYaml(path.join(splitRoot, file.replace(/^\.\//, '')));
  for (const [p, item] of Object.entries(map)) {
    if (!paths[p]) paths[p] = {};
    for (const [k, v] of Object.entries(item)) {
      paths[p][k] = v;
    }
  }
}

// Resolve components
const components = {};
const componentsIndex = readYaml(path.join(splitRoot, 'components/index.yaml'));
for (const file of (componentsIndex.include || [])) {
  const data = readYaml(path.join(splitRoot, file.replace(/^\.\//, '')));
  
  if (data.parameters) {
    components.parameters = { ...components.parameters, ...data.parameters };
    continue;
  }
  if (data.securitySchemes) {
    components.securitySchemes = { ...components.securitySchemes, ...data.securitySchemes };
    continue;
  }
  
  const singleKey = Object.keys(data);
  if (singleKey.length === 1 && !['parameters', 'securitySchemes', 'schemas', 'responses'].includes(singleKey[0])) {
    const name = singleKey[0];
    if (!components.schemas) components.schemas = {};
    components.schemas[name] = data[name];
    continue;
  }
  
  for (const [group, val] of Object.entries(data)) {
    if (typeof val !== 'object' || Array.isArray(val) || val === null) continue;
    if (!components[group]) components[group] = {};
    for (const [k, v] of Object.entries(val)) {
      components[group][k] = v;
    }
  }
}

const bundled = {
  openapi: root.openapi || '3.0.0',
  info: root.info || {},
  servers: [
    { url: apiServer, description: 'Основний сервер API keyCRM' }
  ],
  security: root.security || [],
  tags: resolvedTags,
  paths: paths,
  components: components
};

fs.writeFileSync(outFile, yaml.stringify(bundled, { indent: 2 }));
console.log(`Pre-bundled OpenAPI written to ${outFile}`);
