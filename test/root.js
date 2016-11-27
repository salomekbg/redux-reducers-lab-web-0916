import expect from 'expect';
import jsdom from 'jsdom';
import path from 'path';
import { transformFileSync } from 'babel-core';


before(function(done) {
  const src = path.resolve(__dirname, '..', './src/reducers/index.js');
  const babelResult = transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', '/index.html');

  jsdom.env(html, [], {
    src: babelResult.code
    // virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    return done();
  });
});
