import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import {
  Box,
  Text,
  Code,
  CodeProps,
  Flex,
  Button,
  Container,
  Heading,
  Divider,
} from '@chakra-ui/react';
import Seo from '../components/seo.component';
import MultiContainer from '../components/multi-container.component';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Container>
        <Heading as='h1'>Chakra UI: Advanced Multi-Part Component</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This example page showcases a custom made "Container" component that
          supports light/dark mode, variants and color schemes. It's two parts
          (Outer and Inner) and thus supports full bleed layouts, normal
          constrained ones and different styles for both containers.
        </Text>
      </Container>

      <Divider />

      <MultiContainer>
        <Heading as='h2'>No Variant / No Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This container has no variant set and also no color scheme. The size
          is also not set.
        </Text>
      </MultiContainer>

      <MultiContainer variant='solid'>
        <Heading as='h2'>"Solid" Variant / Default Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "solid" variant set and also uses the default
          color scheme "gray". The size is not set.
        </Text>
      </MultiContainer>

      <MultiContainer variant='solid' colorScheme='purple'>
        <Heading as='h2'>"Solid" Variant / "Purple" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "solid" variant set and also uses the "purple"
          color scheme. The size is not set.
        </Text>
      </MultiContainer>

      <MultiContainer variant='ghost' colorScheme='blue'>
        <Heading as='h2'>"Ghost" Variant / "Blue" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "ghost" variant set and also uses the "blue"
          color scheme. The size is not set.
        </Text>
      </MultiContainer>

      <MultiContainer variant='gradient' colorScheme='orange'>
        <Heading as='h2'>"Gradient" Variant / "Orange" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "gradient" variant set and also uses the
          "Orange" color scheme. The size is not set.
        </Text>
      </MultiContainer>

      <MultiContainer size='prose'>
        <Heading as='h2'>No Variant / No Color Scheme / "Prose" Size</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has no variant set and also no color scheme. The size
          is set to "prose".
        </Text>
      </MultiContainer>

      <MultiContainer variant='ghost' size='3/4'>
        <Heading as='h2'>
          "Ghost" Variant / No Color Scheme / "3/4" Size
        </Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "ghost" variant set and also no color scheme.
          The size is set to "3/4" which equals 75%.
        </Text>
      </MultiContainer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title='Home Page' />;
