import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'my site',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen

  // https://chakra-ui.com/getting-started/gatsby-guide
  // graphqlTypegen: true,

  plugins: ['@chakra-ui/gatsby-plugin'],
};

export default config;
