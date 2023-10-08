import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import {
  Box,
  Code,
  Heading,
  Link as ChakraLink,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';
import Seo from '../components/seo.component';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container centerContent>
      <Heading>404</Heading>
      <Text fontSize='xl' my='5'>
        Такой страницы не существует! sadge :(
      </Text>
    </Container>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title='Not Found' />;
