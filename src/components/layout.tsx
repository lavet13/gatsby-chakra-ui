import React, { FC, PropsWithChildren } from 'react';
import { WrapPageElementProps } from '../common/types/types';
import Header from './header';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Box, Link } from '@chakra-ui/react';

const Layout: FC<WrapPageElementProps> = ({ children }) => {
  const data = useSiteMetadata();

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title} />
      <Box as='div' m='0 auto' maxWidth='960px' p='0 1.0875rem 1.45rem'>
        <Box as='main'>{children}</Box>
        <Box as='footer' marginTop='2rem' fontSize='xl'>
          © {new Date().getFullYear()}, Built with {` `}
          <Link
            isExternal
            textDecor='underline'
            color='purple.500'
            href='https://www.gatsbyjs.com'
          >
            Gatsby
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
