import constants from './constants'
import dev from './dev'
import express from 'express'
import favicon from 'serve-favicon'
import morgan from 'morgan'

const app = express();

if (process.env.NODE_ENV !== constants.production) {
  dev.use(app);
}

app.use(morgan('combined'));
app.use(favicon(constants.favicon));
app.use(express.static(constants.staticDir));

const server = app.listen(constants.port, () => {
  console.log(`listening on port ${constants.port}`);
});
