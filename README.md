# TFC Workspace Name Action

[![Release][release-badge]][releases]

Generates a Terraform Cloud workspace name normalized according to conventions used by ViacomCBS Doppler.

## Table of Contents

- [Inputs](#inputs)
  - [type](#type)
  - [featureBranchName](#featurebranchname)
  - [repoName](#reponame)
  - [suffix](#suffix)
  - [workspacePrefix](#workspaceprefix)
- [Outputs](#outputs)
  - [workspaceName](#workspacename)
- [Example Usage](#example-usage)
- [Contributing](#contributing)

## Inputs

### `type`

**Required** The type of TFC workspace name. Valid values: feature, repo.

### `featureBranchName`

The name of the feature branch from which to derive a feature TFC workspace name.

### `repoName`

The name of the repo from which to derive a repo TFC workspace name.

### `suffix`

The suffix to append to a repo TFC workspace name.

### `workspacePrefix`

A prefix to prepend to the calculated workspace name. **Currently for feature branches only.**

## Outputs

### `workspaceName`

The name of a Terraform Cloud workspace derived from input paramters.

### `branchToken`

The branch token portion of the workspace name.

## Example Usage

```yaml
- uses: cbsinteractive/tfc-workspace-name-action@v1
  with:
    type: feature
    featureBranchName: some-branch-name_with-infra
    workspacePrefix: myproject-
```

Produces:

| Output        | Value                    |
| ------------- | ------------------------ |
| workspaceName | myproject-somebranchname |
| branchToken   | somebranchname           |

```yaml
- uses: cbsinteractive/tfc-workspace-name-action@v1
  with:
    type: repo
    repoName: my-product
    suffix: -prod
```

Produces:

| Output        | Value          |
| ------------- | -------------- |
| workspaceName | myproduct-prod |

### Version Selection

To always use the latest available version, choose the `v1` branch:

```yaml
- uses: cbsinteractive/tfc-workspace-name-action@v1
```

For more stability, choose a specific tag:

```yaml
- uses: cbsinteractive/tfc-workspace-name-action@1.0.0
```

For security reasons, Github only [recommends][security-recommendation-url] pinning to a tag if you trust the code owner.

For maximum stability, choose a specific commit SHA hash:

```yaml
- uses: cbsinteractive/tfc-workspace-name-action@93cc26b399832812dac406b26090080664b5d1eb
```

## Contributing

Please see [Developers Guide](DEVELOPERS.md).

[release-badge]: https://github.com/cbsinteractive/tfc-workspace-name-action/actions/workflows/release.yml/badge.svg
[releases]: https://github.com/cbsinteractive/tfc-workspace-name-action/releases
[security-recommendation-url]: https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions
