# Design System developing 

## Set up 

Set up the right Node version: 

    nvm use

## Publishing

Publishing is automated on merge to `main`.   

### Steps 

Record changes made to packages that will form a changelog, using the [Changesets](https://github.com/atlassian/changesets) CLI: 

    npm run changeset

Update package version numbers:

    npm run pkgs:version

Build assets and then publish to npm:

    npm run pkgs:release
