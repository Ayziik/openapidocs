OpenAPI multi-file layout for keyCRM

Overview
- This directory contains a split, human-friendly multi-file OpenAPI 3.0 specification, generated from docs/api.yaml.
- You can regenerate the split files at any time from the monolithic spec, or bundle the split files back into a single spec for publishing/validation.

Prerequisites
- Run composer install (dev) so symfony/yaml is available:
  composer install

Commands
- Split the monolithic spec into multi-file layout:
  composer openapi:split
  This reads docs/api.yaml and writes files into docs/openapi/.

- Bundle the multi-file layout back into a single spec:
  composer openapi:bundle
  Output file: docs/api.bundled.yaml

Layout
- openapi.yaml: Root file containing info, servers, and references to tags and paths indexes.
- tags/*.yaml: One file per tag with Tag Object.
- paths/*.yaml: Paths split by primary tag (operation.tags[0]). Each file holds only operations belonging to that tag. If a path has operations from multiple tags, it will be represented in multiple files with only the relevant methods.
- components/
  - parameters.yaml: All shared parameters.
  - schemas/*.yaml: One schema (model) per file.
  - misc.yaml: Any other component groups (e.g., responses, requestBodies, headers, securitySchemes, etc.).
  - index.yaml: An index used by the bundler to reassemble components.

Notes
- The root openapi.yaml uses $ref for tags and a single index for paths. Some tools can consume this multi-file structure directly; otherwise, use the bundler to generate a single-file spec.
- The splitter preserves path-level parameters and metadata. Operations are grouped by the first tag in their operation.tags array.
- After editing split files, run composer openapi:bundle to regenerate docs/api.bundled.yaml for distribution.

FAQ
- Can I add new endpoints or models directly in split files?
  Yes. Add them to the appropriate paths/<tag>.yaml or components/schemas/*.yaml, then run bundling. If you also want to keep docs/api.yaml as the canonical source, prefer editing api.yaml and re-running the splitter (it will overwrite the split files).

- How do I validate the bundled spec?
  You can use any OpenAPI validator (e.g., redocly openapi lint, swagger-cli validate) on docs/api.bundled.yaml.
