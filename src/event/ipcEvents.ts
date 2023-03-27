import { IpcMainEvent } from 'electron'
import eventNames = require('./eventNames')
import recordBtnClickHandler = require('../handlers/recordBtnClick')

const eventHandlerMap = new Map<string, (e: IpcMainEvent, arg: any[]) => (void)>()

eventHandlerMap.set(eventNames.recordBtnClick, recordBtnClickHandler.recordHandler()) // recordBtnClickHandler is a closure function.

export = eventHandlerMap