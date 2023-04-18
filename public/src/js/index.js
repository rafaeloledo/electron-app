const { app, BrowserWindow } = require('electron')

function createWindows() {
  let appWindow = new BrowserWindow({
    width: 600,
    height: 800,
    center: true,
    minWidth: 300,
    show: false
  })
  appWindow.loadFile('public/src/view/index.html')

  appWindow.once('ready-to-show', () => {
    appWindow.show()
  })

  appWindow.menuBarVisible = false
}

app.on('ready', createWindows)
app.on('window-all-closed', () => { 
  app.quit()
})