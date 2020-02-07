import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';

const html = fs.readFileSync('dist/index.html').toString();
const parts = html.split('not rendered');
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/dist', express.static('dist'));

app.use((req, resp) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  resp.send(parts[0] + renderToString(reactMarkup) + parts[1]);

  resp.end();
});

console.log(`listening on port: ${PORT}`);

app.listen(PORT);
