import React, { FC } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type SeoProps = {
  title?: string;
};

const Seo: FC<SeoProps> = ({ title }) => {
  const data = useSiteMetadata();

  return <title>{data?.site?.siteMetadata?.title ?? title}</title>;
};

export default Seo;
