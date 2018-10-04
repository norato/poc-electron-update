const pkg = require('./package.json');
const appdist = 'dist/app';

function toDist(file) {
  return `cpx ${file} ${appdist}`;
}

const bundleParams = [
  `--executable-name=${pkg.name}`,
  '--out=dist/app-bundle',
  '--overwrite',
  '--ignore=README.md',
  '--ignore=.gitignore',
  '--ignore=tsconfig.json',
  '--ignore=yarn.lock'
].join(' ');

module.exports = {
  scripts: {
    build: {
      compile: 'tsc -p src',
      html: toDist('src/index.html'),
      package: toDist('package.json'),
      default: 'nps build.compile build.html build.package'
    },
    run: `electron ${appdist}`,
    start: 'nps build run',
    bundle: {
      default: `electron-packager ${appdist} ${bundleParams}`,
      all: `electron-packager ${appdist} ${bundleParams} --platform=all --arch=x64`
    },
    packages: {
      win: 'node lib/build/winstaller.builder.js',
      deb64: 'node lib/build/deb64.builder.js',
      rpm64: 'node lib/build/rpm64.builder.js',
      osx: 'node lib/build/darwin.builder.js',
      default: 'nps packages.win packages.deb64 packages.rpm64 packages.osx'
    }
  }
};
