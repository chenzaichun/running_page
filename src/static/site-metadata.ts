interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: '',
  logo: '',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://chenzaichun.github.io/',
    },
    {
      name: 'About',
      url: 'https://chenzaichun.github.io/',
    },
  ],
};

export default data;
