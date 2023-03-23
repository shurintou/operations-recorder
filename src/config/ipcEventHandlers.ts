import { IpcMainEvent } from 'electron'
import mouseMove = require('../mouse/mouseMove')

const eventHandlerMap = new Map<string, (e: IpcMainEvent, arg: any[]) => (void)>()

eventHandlerMap.set('mouse-handler:moveMouse', mouseMove)

export = eventHandlerMap