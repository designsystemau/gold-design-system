# Publishing npm

Publishing is not automated (yet) and only authorised users can push to npm.  

## Steps 

Record changes made to packages that will form a changelog, using the [Changesets](https://github.com/atlassian/changesets) CLI: 

    npm run changeset

Update package version numbers:

    npm run pkgs:version

Build assets and then publish to npm:

    npm run pkgs:release
