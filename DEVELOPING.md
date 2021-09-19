# Design System developing 

## Set up 

Set up the right Node version: 

    nvm use

Configure the monorepo, and install all the dependencies: 

    npm i 
    npm run bootstrap 
    
Work on modules individually: 

    cd packages/buttons
    npm run watch 

## Publishing

Include a [Changeset](https://github.com/atlassian/changesets) with your changes:

    npm run changeset

Changes will be deployed in CI on merge to `main`, see './.github/workflows/publish.yml'.
