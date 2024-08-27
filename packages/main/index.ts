/**
 * 主进程
 * 作用：窗口创建 和 管理应用程序窗口
 */ 
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("node:path");


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(app.getAppPath(), './dist/preload.js')
        }
    });
    // win.loadURL('http://localhost:5173/');// 通过
    win.loadFile('./dist/index.html');
    // console.log(win.webContents);// 可以通过这个与网页交互
    // win.webContents.openDevTools()// 需要调试时打开
};

app.whenReady().then(() => {
    createWindow();
    ipcMain.handle('ping', () => 'ok');
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});