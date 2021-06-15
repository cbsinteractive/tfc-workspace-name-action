# Developers Guide

Information for developers.

## Semantic Release

Releases are published automatically by [semantic-release][]. A [CI workflow][release-workflow-url] is configured to run [semantic-release-action][], which uses the project's release [configuration][release-config-url]. This has a number of implications, described in the sections below.

### CHANGELOG.md is auto-generated

semantic-release maintains the [CHANGELOG][changelog-url]. As humans, we focus on writing well-thought-out git commit messages that enable semantic-release to do this. More in [Commit Messages](#commit-messages).

### Versioning Strategy

There is no `main` branch. Instead there are one or more "release" branches (currently only `v.1x`). This allows users to select a particular major version, as opposed to a particular tag or commit SHA.

### Commit Messages

The underpinning of a semantic-release strategy are well-crafted Git commit messages following a specific convention. We use the default [Angular Commit Message Conventions][angular-commit-message-conventions-url].

Examples:

* A new non-breaking feature:
    ```
    feat: Some new feature
    ```
    This causes semantic-release to issue a new minor release.
* A non-breaking bug fix:
    ```
    fix: Fixed the blow-out in damper 3
    ```
    This causes semantic-release to issue a new patch release.
* A documentation-only change:
    ```
    doc: Describe the things
    ```
    This results in no new release.
* A breaking change:
    ```shell
    feat: Bring food replicators online
    
    BREAKING CHANGE: New laws of physics
    ```
    This causes semantic-release to issue a new major release.

As you can see, commit messages aways begin with (and sometimes consist _only_ of) a header. A header declares the **type**, followed by a colon and a short description. See the full list of header types [here][angular-header-types-url].

The full Angular Changelog Convention is available [here][angular-changelong-convention].

[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-action]: https://github.com/cycjimmy/semantic-release-action
[release-workflow-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/.github/workflows/release.yml
[changelog-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/CHANGELOG.md
[release-config-url]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/blob/v1.x/release.config.js
[angular-commit-message-conventions-url]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format
[angular-header-types-url]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
[angular-changelong-convention]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular
