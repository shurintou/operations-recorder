// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer } = require('electron')
import eventNames = require('./event/eventNames')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    // to register DOM event and dispatch it to ipc event handler
    document.getElementById('record-btn').addEventListener('click', async (e) => {
        const btnEl = e.target as Element
        const shouldBtnElStart = btnEl.innerHTML.startsWith('start')
        if (shouldBtnElStart) {
            btnEl.innerHTML = 'stop record'
        }
        else {
            btnEl.innerHTML = 'start record'
        }
        ipcRenderer.send(eventNames.recordBtnClick)
    })
})