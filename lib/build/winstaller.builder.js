const electronInstaller = require('electron-winstaller');
const { pkg, startLog, sucessLog, errorLog, product } = require('./utils');

const options = {
  appDirectory: product.src('win32-x64'),
  name: pkg.name,
  title: pkg.name,
  outputDirectory: product.dest('win32-x64/'),
  authors: pkg.name,
  exe: `${pkg.name}.exe`,
  setupExe: 'setup.exe',
  setupMsi: 'setup.msi',
  noMsi: false
};

startLog('win32-x64');

const resultPromise = electronInstaller.createWindowsInstaller(options);

resultPromise.then(
  () => sucessLog(options.outputDirectory),
  e => errorLog(e.message)
);
