const STATIC = `${__dirname}/../static`;

const constants = {
  appCSS: 'app.css',
  favicon: `${STATIC}/images/favicon.ico`,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  production: 'PRODUCTION',
  staticDir: STATIC,
  staticStylesDir: `${STATIC}/css`,
  stylesDir: `${__dirname}/../styles`,
};

export default constants;
