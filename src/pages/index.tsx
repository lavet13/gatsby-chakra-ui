import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Text, Code, CodeProps, Flex, Button } from '@chakra-ui/react';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return <></>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title='Home Page' />;
