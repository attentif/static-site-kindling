var metalsmith = require('metalsmith')(__dirname),
    ignore = require('metalsmith-ignore'),
    markdown = require('metalsmith-markdown'),
    stylus = require('metalsmith-stylus'),
    templates = require('metalsmith-templates'),
    watch = process.argv[2] === 'watch' ? require('metalsmith-watch') : null;

metalsmith
    .source('./src')
    .destination('./build')
    .clean(false) // to keep .git, CNAME etc.
    .use(markdown())
    .use(stylus({nib: true}))
    .use(templates({
      engine: 'handlebars',
      directory: 'src/_templates'
    }))
    .use(ignore([
      '_templates/*'
    ]));

if (watch) {
  metalsmith.use(watch());
}

metalsmith.build(function (err) {
  if (err) { return console.error(err); }
  console.log('OK');
});
