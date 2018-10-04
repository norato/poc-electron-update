const installer = require('electron-installer-debian');
const { pkg, startLog, sucessLog, errorLog, product } = require('./utils');

const options = {
  src: product.src('linux-x64'),
  name: pkg.name,
  dest: product.dest('deb64/'),
  arch: 'amd64'
};
startLog('deb64');

installer(options)
  .then(() => sucessLog(options.dest))
  .catch(err => {
    errorLog(err, err.stack);
    process.exit(1);
  });
