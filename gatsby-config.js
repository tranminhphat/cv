module.exports = {
  siteMetadata: {
    title: `Phat Tran's CV`,
    description: `Phat Tran's CV made with Gatsby`,
    author: `@tranminhphat <phattm204@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phat Tran's CV`,
        start_url: `/`,
        display: `standalone`,
        icon: `./src/static/avatar.png`,
        theme_color_in_head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
