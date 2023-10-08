import { PageProps, HeadFC } from 'gatsby';
import React, { FC } from 'react';
import Seo from '../components/seo.component';
import { useQuery, gql } from '@apollo/client';
import { Heading } from '@chakra-ui/react';
import MultiContainer from '../components/multi-container.component';

export const GET_MESSAGES = gql`
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

  return (
    <MultiContainer maxW='600px' size='full' variant='ghost' colorScheme='gray'>
      <Heading mb='5'>Чаты</Heading>
      <Heading fontSize='xl'>Недавнее сообщения</Heading>
    </MultiContainer>
  );
};

export default Messages;

export const Head: HeadFC = () => <Seo title='Messages' />;
