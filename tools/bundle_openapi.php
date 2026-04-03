#!/usr/bin/env php
<?php

declare(strict_types=1);

/*
 * Bundle the split multi-file OpenAPI located in docs/openapi back into a single YAML file.
 * Usage: php docs/tools/bundle_openapi.php [--out=docs/api.bundled.yaml]
 */

use Symfony\Component\Yaml\Yaml;

require_once __DIR__.'/../../vendor/autoload.php';

$rootDir = dirname(__DIR__);
$splitRoot = $rootDir.'/openapi';
$outFile = $rootDir.'/api.yaml';
$apiServer = 'https://openapi.keycrm.app/v1';

foreach ($argv as $arg) {
    if (str_starts_with($arg, '--server=')) {
        $apiServer = substr($arg, 6);
    }
}

function readYaml(string $file)
{
    return Yaml::parseFile($file);
}

function writeYaml(string $file, $data): void
{
    $yaml = Yaml::dump($data, 99, 2, Yaml::DUMP_MULTI_LINE_LITERAL_BLOCK);
    file_put_contents($file, $yaml);
}

if (! is_dir($splitRoot)) {
    fwrite(STDERR, "Split openapi directory not found: $splitRoot\n");
    exit(1);
}

$root = readYaml($splitRoot.'/openapi.yaml');

// Resolve tags
$resolvedTags = [];
foreach (($root['tags'] ?? []) as $tagRef) {
    if (isset($tagRef['$ref'])) {
        $tag = readYaml($splitRoot.'/'.ltrim($tagRef['$ref'], './'));
        $resolvedTags[] = $tag;
    }
}

// Resolve paths
$pathsIndex = readYaml($splitRoot.'/paths/index.yaml');
$paths = [];
foreach (($pathsIndex['include'] ?? []) as $file) {
    $map = readYaml($splitRoot.'/'.ltrim($file, './'));
    foreach ($map as $p => $item) {
        if (! isset($paths[$p])) {
            $paths[$p] = [];
        }
        // Merge operations; later files override earlier if duplicate method
        foreach ($item as $k => $v) {
            if (! isset($paths[$p][$k])) {
                $paths[$p][$k] = $v;
            } else {
                $paths[$p][$k] = $v; // override
            }
        }
    }
}

// Resolve components
$components = [];
$componentsIndex = readYaml($splitRoot.'/components/index.yaml');
foreach (($componentsIndex['include'] ?? []) as $file) {
    $data = readYaml($splitRoot.'/'.ltrim($file, './'));

    // parameters.yaml has { parameters: {...} }
    if (isset($data['parameters'])) {
        $components['parameters'] = array_merge($components['parameters'] ?? [], $data['parameters']);

        continue;
    }

    //bearerAuth.yaml has { securitySchemes: {...} }
    if (isset($data['securitySchemes'])) {
        $components['securitySchemes'] = array_merge($components['securitySchemes'] ?? [], $data['securitySchemes']);

        continue;
    }

    // schemas/<Model>.yaml has { ModelName: {...} }
    $singleKey = array_keys($data);
    if (count($singleKey) === 1) {
        $name = $singleKey[0];
        $components['schemas'][$name] = $data[$name];

        continue;
    }
    // misc.yaml: copy all top-level groups
    foreach ($data as $group => $val) {
        if (! is_array($val)) {
            continue;
        }
        if (! isset($components[$group])) {
            $components[$group] = [];
        }
        if (is_array($val)) {
            // deep merge by key
            foreach ($val as $k => $v) {
                $components[$group][$k] = $v;
            }
        }
    }
}

$bundled = [
    'openapi' => $root['openapi'] ?? '3.0.0',
    'info' => $root['info'] ?? [],
    'servers' => [
        [
            'url' => $apiServer,
            'description' => 'Основний сервер API keyCRM',
        ],
    ],
    'tags' => $resolvedTags,
    'paths' => $paths,
    'components' => $components,
];

writeYaml($outFile, $bundled);

fwrite(STDOUT, "Bundled OpenAPI written to $outFile\n");
