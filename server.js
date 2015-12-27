const path = require('path');
const express = require('express');
const webpack = require('webpack');
const winston = require('winston');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const usersMock = require('./users.json');

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = '0.0.0.0';

const authRoutes = express.Router();

app.set('superSecret', 'CHANGE_ME');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', authRoutes);

const config = require('./webpack.config');
const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  winston.info('Bundling webpack... Please wait.');

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

authRoutes.use(function(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['authorization'];

  if (token) {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'Failed to authenticate token.',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
});

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = usersMock.find((user) => {
    return user.username === username && user.password === password;
  });

  if (!foundUser) {
    setTimeout(function() {
      return res.status(401).send({
        success: false,
        message: 'Authentication failed. Invalid username or password.',
      });
    }, 750);
  } else {
    const token = jwt.sign(foundUser, app.get('superSecret'), {
      expiresIn: 15, // 3600, // 1 hour
    });

    setTimeout(function() {
      return res.status(200).send({
        success: true,
        message: 'Authentication successful.',
        token: token,
        profile: foundUser,
      });
    }, 750);
  }
});

app.get('/api/content', (req, res) => {
  setTimeout(function() {
    return res.status(200).send({
      title: 'About Us',
      body: 'Rangle.io is a next-generation HTML5 design and development firm ' +
            'dedicated to modern, responsive web and mobile applications.',
    });
  }, 750);
});

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening at http://${ DOMAIN }:${ PORT }`);
});
