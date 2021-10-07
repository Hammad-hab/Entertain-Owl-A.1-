
const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1000, height: 1000 ,icon: __dirname + '/HTML & pics/Logo.png'})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'HTML & pics/load page.html'),
      protocol: 'file:',
      slashes: true
    }))
  }  app.on('ready', createWindow)