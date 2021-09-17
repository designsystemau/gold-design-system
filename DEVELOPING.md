# Design System developing 

## Set up 

Set up the right Node version: 

    nvm use

Configure the monorepo: 

    npm run bootstrap 
    
Work on modules individually: 

    cd packages/buttons
    npm run watch 

## Publishing

Publishing to npm is automated, but requires developers to add [Changesets](https://github.com/atlassian/changesets):   

Record changes made to packages that will form a changelog, using the  CLI: 

    npm run changeset
