import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.LayoutQuery>(query);

  return data;
};
