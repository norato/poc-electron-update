import { BrowserWindow, shell } from 'electron';
import { configureMacMenu } from './configureMacMenu';
import * as path from 'path';

export const appName = 'Poc electron update';
export const isMacOs = process.platform === 'darwin';
export let mainWindow: BrowserWindow;

export function createWindow() {
  configureMacMenu();
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    resizable: false,
    center: true,
    useContentSize: true,
    frame: !isMacOs,
    fullscreen: false,
    fullscreenable: false,
    maximizable: false,
    minimizable: true,
    title: appName,
    titleBarStyle: 'hiddenInset',
    show: false,
    backgroundColor: '#f5f7fa',
    icon: path.join(__dirname, 'assets/img/icon.png')
  });
  (<any>global).mainWindow = mainWindow;
  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
  // Only show the window when the contents are ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
  // Open all external links in OS' default browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    (<any>global).mainWindow = null;
  });
}
