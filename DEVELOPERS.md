# Developers Guide

Information for developers.

## Semantic Release

Releases are published automatically by [semantic-release][]. A [CI workflow][release-workflow-url] is configured to run [semantic-release-action][], which uses the project's release [configuration][release-config-url]. This has a number of implications, described in the sections below.

### CHANGELOG.md is auto-generated

semantic-release maintains the [CHANGELOG][changelog-url]. As humans, we focus on writing well-thought-out git commit messages that enable semantic-release to do this.

### Versioning Strategy

There is no `main` branch. Instead there are one or more "release" branches (currently only `v.1x`). This allows users to select a particular major version, as opposed to a particular tag or SHA commit hash.


[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-action]: https://github.com/cycjimmy/semantic-release-action
[release-workflow-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/.github/workflows/release.yml
[changelog-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/CHANGELOG.md
[release-config-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/release.config.js
