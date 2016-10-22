import constants from './constants'
import stylus from 'stylus'
import nib from 'nib'

const use = (app) => {
  const middleware = stylus.middleware({
    src: constants.stylesDir,
    dest: constants.staticStylesDir,
    compile: function (str, path) {
      return stylus(str)
      .set('filename', path)
      .use(nib())
      .import('nib');
    }
  });
  app.get(`/${constants.appCSS}`, middleware);
}

export default { use };
