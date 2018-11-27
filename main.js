const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    // backgroundColor: "#212121",
    autoHideMenuBar: true
  });

  win.loadURL(`file://${__dirname}/dist/splinter-wallet/index.html`);

  win.on('closed', function() {
    win = null;
  });

  // uncomment to open DevTools
  win.webContents.openDevTools();
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
