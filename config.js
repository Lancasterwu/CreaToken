const gitalk = {
  clientID: "c91c2efd50852457b47f",
  clientSecret: "ef026ee0f8cdba42ef90664fcc810aaa92a024e2",
  repo: "https://creative-token-share.netlify.com/",
  owner: "Lancasterwu",
  admin: "Lancasterwu"
};


module.exports = {
  title: 'CreaToken', // Required
  author: 'The Creative Token Market', // Required
  description: 'Allegheny College Lancaster Wu',
  primaryColor: '#3498db', // Required
  showHeaderImage: true,
  showShareButtons: true,
  postsPerPage: 5, // Required
  social: {
    website: 'https://creative-token-share.netlify.com/',
    github: 'https://github.com/Lancasterwu',
    twitter: 'https://twitter.com/YueshenWu',
  },
  pathPrefix: '/CreaToken',
  siteUrl: 'https://creative-token-share.netlify.com/CreaToken',
  gitalk
};
