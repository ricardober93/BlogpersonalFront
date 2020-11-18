/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = { 
      siteMetadata: {
        title: `Blog de Ricardo Bermudez`,
        description: `Blog personal de Marketing y desarrollo Frontend`,
    },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.API_URL || `http://localhost:1337`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`blog`, `autor`, `categorias`, `work`],
      //If using single types place them in this array.
      singleTypes: [`home`],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      loginData: {
        identifier: "",
        password: "",
      },
    },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog Ricardo`,
        short_name: `RicardoBlog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/portafolio/`, `/blog/*`],
      },
    },

    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}