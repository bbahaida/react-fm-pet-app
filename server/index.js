import express from 'express';
import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';

const html = fs.readFileSync('dist/index.html').toString();
const parts = html.split('not rendered');
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/dist', express.static('dist'));

app.use((req, resp) => {
  resp.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(resp, { end: false });

  stream.on('end', () => {
    resp.write(parts[1]);
    resp.end();
  });
});

console.log(`listening on port: ${PORT}`);

app.listen(PORT);
