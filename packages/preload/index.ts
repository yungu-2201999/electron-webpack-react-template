const { contextBridge, ipcRenderer } = require('electron')

/**
 * 该脚本可以预先将一些Node.js API 注入到渲染器中使用。
 * 可以访问NodeAPI
 */

/**
 * 可以将一些配置挂载到 globalThis 上
 * 作用：
 *  - 可以通过ipcRenderer让渲染器与主进程通信
 *  - 可以单独为web去注入一些只有桌面端可用的设计逻辑，到window上
 */
contextBridge.exposeInMainWorld('versions', { 
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
});