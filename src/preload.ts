// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')
import eventNames = require('./event/eventNames')
import { IpcRendererCallBackFunction } from './types/interface'
const { recordBtnCountdownTime } = require('./config/index')

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
        const isRecording = btnEl.innerHTML.startsWith('stop')
        const intervalEl = (<HTMLInputElement>document.getElementById('interval-id'))
        const countdownRemainEl = (<HTMLInputElement>document.getElementById('count-down-remain'))
        if (shouldBtnElStart) {
            btnEl.innerHTML = recordBtnCountdownTime + 's'
            countdownRemainEl.value = recordBtnCountdownTime
            const newIntervalId = window.setInterval(() => {
                const countdownRemain = parseInt(countdownRemainEl.value)
                if (countdownRemain > 1) {
                    btnEl.innerHTML = (countdownRemain - 1) + 's'
                    countdownRemainEl.value = (countdownRemain - 1).toString()
                }
                else {
                    ipcRenderer.send(eventNames.recordBtnClick)
                    btnEl.innerHTML = 'stop record'
                    clearInterval(intervalEl.value)
                }
            }, 1000)
            intervalEl.value = newIntervalId.toString()
        }
        else {
            clearInterval(intervalEl.value)
            countdownRemainEl.value = "0"
            btnEl.innerHTML = 'start record'
            if (isRecording) {
                ipcRenderer.send(eventNames.recordBtnClick)
            }
        }
    })
})

contextBridge.exposeInMainWorld(
    'electronAPI',
    {
        onToggleButton: (callBack: IpcRendererCallBackFunction) => ipcRenderer.on(eventNames.recordBtnGlobalShortcut, callBack)
    }
)