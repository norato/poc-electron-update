import { app } from 'electron';
import { createWindow, isMacOs, appName, mainWindow } from './createWindow';

export function runElectron() {
  if (isMacOs) {
    app.setName(appName);
  }
  app.on('ready', createWindow);
  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    // this should be placed at top of main.js to handle setup events quickly
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow();
    }
  });
  /**
   * vCenter WSDL web services use a self-signed certificate. This allows them to be trusted.
   */
  app.on(
    'certificate-error',
    (event, webContents, url, error, certificate, callback) => {
      event.preventDefault();
      callback(true);
    }
  );
}
