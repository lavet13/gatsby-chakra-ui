import type { GatsbyConfig } from 'gatsby';
import { plugin as typescript } from '@graphql-codegen/typescript';
import { plugin as reactApollo } from '@graphql-codegen/typescript-react-apollo';
import { plugin as operations } from '@graphql-codegen/typescript-operations';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'my site',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen

  // https://chakra-ui.com/getting-started/gatsby-guide
  graphqlTypegen: true,

  plugins: [
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegen: false,
        additionalSchemas: [
          {
            key: 'apollo-chatdb',
            fileName: './__generated/apollo-types.ts',
            documentPaths: ['./src/**/*.{ts,tsx}'],
            codegenPlugins: [reactApollo, operations, typescript],
            schema: 'http://localhost:4000/graphql',
            pluckConfig: {
              globalGqlIdentifierName: 'gql',
              modules: [
                {
                  name: 'graphql-tag',
                  identifier: 'gql',
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default config;
