# yungu-editor-app

渲染进程与主进程沟通问题
1. 渲染 -> 主进程
   1. 在preload通过ipcRenderer.send预留出api，然后在web端调用
   2. 在主进程用ipcMain.handle监听，并处理操作。
2. 渲染 <-> 主进程
   1. 在preload通过ipcRenderer.invoke预留出api，然后在web端调用
   2. 在主进程中ipcMain.handle监听，并处理操作。
3. 渲染 <- 主进程
   1. 在主进程中ipcMain.on事先监听好事件
   2. 在preload通过ipcRenderer.on声明好对应的api给web端