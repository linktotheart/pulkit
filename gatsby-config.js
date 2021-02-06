const siteMetadata = require('./site-metadata.json')
// new comment for dev /
module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        {
            resolve:  `gatsby-plugin-social9-comment`,
            options: {
                id: "s9-sdk",
                async: true,
                defer: true,
                content: "186fd307066942488e96962e38c8c94f",
                src: "socialshare.min.js"
              },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
