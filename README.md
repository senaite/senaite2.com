# New SENAITE Website with Documentation

This repository holds the new SENAITE website based on
[Docusaurus](https://docusaurus.io).


## Install the Docusaurus init command

https://docusaurus.io/docs/en/tutorial-setup#install-the-docusaurus-init-command

Docusaurus comes with a command line tool to help you scaffold a Docusaurus site
with some example templates.

Run the following command:

    npm install --global docusaurus-init

or if you have Yarn:

    yarn global add docusaurus-init

## Install the dependencies

Change into the `website` directory of the site and install the required
dependencies with `npm install` or `yarn install`.


## Start the develop server

Make sure to be in the `website` directory and run `npm run start` or `yarn start`.


## Site Configuration

The global site configuration resides in the file `website/siteConfig.js`.
Documentation can be found here: https://docusaurus.io/docs/en/site-config


# Sidebar Navigation

The configuration for the sidebar navigation resides in the file `website/sidebars.json`

## Provided Components

Docusaurus comes with some ReactJS Components that can be used in pages like
e.g. a `MarkdownBlock`, `Container`, `Grid` etc.

https://docusaurus.io/docs/en/api-pages#provided-components


## Deployment

The website is deployed on [GitHub](https://github.com/senaite) in the repository
`senaite.github.io`.

A script will execute all necessary steps to deploy the latest version.

Deploy Command:

    ./bin/deploy


## Versioning

Run the following command to create a new version:

    cd website
    yarn run version 1.3.3

Further reading: https://docusaurus.io/docs/en/versioning


# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />
</a>
<br />
This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
</a>.
