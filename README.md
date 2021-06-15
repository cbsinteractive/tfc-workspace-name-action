# Normalized TFC Workspace Name

[![Release][release-badge]][releases]

Generates a Terraform Cloud workspace name normalized according to conventions used by ViacomCBS Doppler.

## Table of Contents

- [Inputs](#inputs)
  - [type](#type)
  - [featureBranchName](#featurebranchname)
  - [repoName](#reponame)
  - [suffix](#suffix)
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

## Outputs

### `workspaceName`

The name of a Terraform Cloud workspace derived from input paramters.

## Example usage

```yaml
- uses: cbsinteractive/normalized-tfc-workspace-name@v1.x
  with:
    type: feature
    featureBranchName: some-branch-name_with-infra
```

Produces: `somebranchname`

```yaml
- uses: cbsinteractive/normalized-tfc-workspace-name@v1.x
  with:
    type: repo
    repoName: my-product
    suffix: -prod
```

Produces: `myproduct-prod`

## Contributing

Please see [Developers Guide](DEVELOPERS.md).

[release-badge]: https://img.shields.io/github/workflow/status/cbsinteractive/normalized-tfc-workspace-name/Release?label=Build&logo=github&style=flat-square
[releases]: https://github.com/cbsinteractive/normalized-tfc-workspace-name/releases
