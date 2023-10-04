import { PageProps, HeadFC } from 'gatsby';
import React, { FC } from 'react';
import Seo from '../components/seo.component';
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query GetMessagesQuery {
    messages {
      edges {
        node {
          id
          text
        }
      }
    }
  }
`;

const Messages: FC<PageProps> = props => {
  const { data, loading, error } = useQuery(GET_MESSAGES);
  console.log({ data, loading, error });
  return <></>;
};

export default Messages;

export const Head: HeadFC = () => <Seo title='Messages' />;
