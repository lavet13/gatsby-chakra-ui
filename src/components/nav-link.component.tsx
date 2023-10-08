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
  const isActive = location.pathname === to;

  return (
    <Link
      colorScheme='green'
      as={GatsbyLink}
      {...(isActive ? { variant: 'active' } : {})}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
