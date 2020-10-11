module.exports = {
  siteMetadata: {
    // edit below
    title: `About`,
    description: `I am a Software Engineer from Berlin`,
    image:
      "https://lh3.googleusercontent.com/proxy/4sGzM-jG8wGPtl-lBzbbmsRbERFd0aJi-XTEzl3IXARfyWFidjGabJFH8BxFbyCx6cAwYhZ0ay-1ZK3vSSgylER4",
    titleTemplate: `Mark Witt: %s`,
    author: `Mark Witt`,
    siteUrl: `https://markwitt.me/`,
    social: {
      twitter: `markwitt_me`,
    },
    language: "en",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Witt`,
        short_name: `Mark`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#3f51b5`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],

        plugins: [`gatsby-remark-images`],
      },
    },
  ],
};
