const STATIC = `${__dirname}/../static`;

const coolThings = [
  { description: 'a voting site for consensus-run funds', link: 'https://github.com/yasyf/vc' },
  { description: 'a slack bot for venture capital', link: 'https://github.com/yasyf/drfbot' },
  { description: 'a gamified code coverage leaderboard', link: 'https://github.com/yasyf/shamer' },
  { description: 'a search engine for classes at MIT', link: 'http://textbooksearch.mit.edu' },
  { description: "a map of the world's sentiments", link: 'https://github.com/yasyf/sentinents' },
  { description: 'an API for resources at MIT', link: 'https://github.com/yasyf/mitclasses' },
  { description: 'facial recognition for my door', link: 'https://github.com/yasyf/facelock' },
];

const meta = {
  description: 'Yasyf Mohamedali: Student. Engineer. Entrepreneur. CS @ MIT. Managing Partner at Dorm Room Fund Boston. Previously at Facebook, Foxtrot, Square. Proudly Canadian!',
  url: 'http://www.yasyf.com',
  title: 'Yasyf Mohamedali - Student | Entrepreneur | Engineer',
  twitterHandle: 'yasyf',
}

const constants = {
  appCSS: 'css/app.css',
  coolThings,
  favicon: `${STATIC}/images/favicon.ico`,
  meta,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  production: 'PRODUCTION',
  staticDir: STATIC,
  staticStylesDir: `${STATIC}/css`,
  stylesDir: `${__dirname}/../styles`,
};

export default constants;
