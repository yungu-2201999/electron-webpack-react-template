/**
 * 渲染器一般会以一个HTML文件作为渲染器入口点
 * 渲染器无权直接访问require或其他Node.js API 
 */ 

const information = document.getElementById('info')
information!.innerText = `本应用正在使用 Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), 和 Electron (v${window.versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
  }
  
  func()