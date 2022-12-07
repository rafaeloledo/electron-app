const { app, BrowserWindow } = require('electron')

function createWindows() {
  let appWindow = new BrowserWindow()
  appWindow.loadURL('https://www.betteranime.net') 
}

app.on('ready', createWindows)