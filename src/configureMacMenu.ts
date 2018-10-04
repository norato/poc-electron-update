import { app, Menu } from 'electron';
import { isMacOs, appName } from './createWindow';
/**
 * Configuration to allow keyboard shortcuts for MacOs
 */
export function configureMacMenu() {
  if (isMacOs) {
    const menuTemplate: Electron.MenuItemConstructorOptions[] = [
      {
        label: appName,
        submenu: [
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() {
              app.quit();
            }
          }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            selector: 'redo:'
          },
          { type: 'separator' },
          { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
          { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
          { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
          {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            selector: 'selectAll:'
          }
        ]
      } as Electron.MenuItemConstructorOptions
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
  }
}
