import React, { FC } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { Link, LinkProps } from '@chakra-ui/react';

type NavLinkProps = GatsbyLinkProps<any> & LinkProps;

const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  partiallyActive,
  ...rest
}) => {
  return (
    <Link as={GatsbyLink} activeClassName={'active-link'} to={to} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
