# Developers Guide

Information for developers.

## Table of Contents

- [Semantic Release](#semantic-release)
  - [CHANGELOG.md is auto-generated](#changelogmd-is-auto-generated)
  - [There is no `main` branch](#there-is-no-main-branch)
  - [Commit messages matter](#commit-messages-matter)

## Semantic Release

Releases are published automatically by [semantic-release][]. A [CI workflow](.github/workflows/release.yml) is configured to run a [Semantic Release Action][] based on the project's [configuration](release.config.js). This has a number of implications, described in the sections below.

### CHANGELOG.md is auto-generated

Semantic Release maintains the [CHANGELOG][changelog-url]. Humans should not touch it. Instead, we focus making well-thought-out git commits that enable Semantic Release to do its job. More on this under [Commit messages matter](#commit-messages-matter).

### There is no `main` branch

TODO

### Commit messages matter

TODO

[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic release action]: https://github.com/cycjimmy/semantic-release-action
[changelog-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/CHANGELOG.md
