const { app, BrowserWindow } = require('electron');
const path = require('path');
// const log = require('electron-log');
const request = require('request');
// const contextMenu = require('electron-context-menu');
const express = require('express'); //your express app
// require('../client/components/App.jsx')

// contextMenu({
//   prepend: (defaultActions, params, browserWindow) => [
//     {
//       label: 'Rainbow',
//       // Only show it when right-clicking images
//       visible: params.mediaType === 'image',
//     },
//     {
//       label: 'Search Google for “{selection}”',
//       // Only show it when right-clicking text
//       visible: params.selectionText.trim().length > 0,
//       click: () => {
//         shell.openExternal(
//           `https://google.com/search?q=${encodeURIComponent(
//             params.selectionText
//           )}`
//         );
//       },
//     },
//   ],
// });

// let mainWindow;
// (async () => {
//   await app.whenReady();

//   mainWindow = new BrowserWindow(webPreferences, {
//     spellcheck: true,
//   });
// })();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('./index.html');
}

// app.whenReady().then(createWindow);

app.on('ready', function () {
  express();
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: true,
  });
  mainWindow.loadURL('http://localhost:3000/');
  mainWindow.focus();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on(
  'window-all-closed',
  () => process.platform !== 'darwin' && app.quit() // "darwin" targets macOS only.
);
