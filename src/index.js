import constants from './constants'
import dev from './dev'
import dotenv from 'dotenv'
import express from 'express'
import favicon from 'serve-favicon'
import morgan from 'morgan'
import twitterAPI from 'node-twitter-api'

dotenv.config();

const app = express();
const twitter = new twitterAPI({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
});

if (process.env.NODE_ENV !== constants.production) {
  dev.use(app);
}

app.use(morgan('combined'));
app.use(favicon(constants.favicon));
app.use(express.static(constants.staticDir));

app.locals = constants;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/api/coolThings.json', (req, res) => {
  res.json({ coolThings: constants.coolThings });
})

app.get('/api/lastTweet.json', (req, res) => {
  twitter.getTimeline(
    'user_timeline',
    {
      count: 5,
      exclude_replies: true,
      include_rts: false,
      screen_name: constants.meta.twitterHandle,
    },
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    (err, data, resp) => {
      res.json({ lastTweets: data.map(t => t.text) });
    }
  );
})

const server = app.listen(constants.port, () => {
  console.log(`listening on port ${constants.port}`);
});
