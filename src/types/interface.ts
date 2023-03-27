import { IpcRendererEvent } from 'electron'

function ipcRendererCallBackFunction(event: IpcRendererEvent, ...args: any[]): void {

}

export type IpcRendererCallBackFunction = typeof ipcRendererCallBackFunction
