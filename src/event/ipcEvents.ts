import { IpcMainEvent } from 'electron'
import eventNames = require('./eventNames')
import recordBtnClickHandler = require('../handlers/recordBtnClick')
import saveBtnClickHandler = require('../handlers/saveBtnClick')

const eventHandlerMap = new Map<string, (e: IpcMainEvent, arg: any[]) => (void)>()

eventHandlerMap.set(eventNames.recordBtnClick, recordBtnClickHandler.recordHandler()) // recordBtnClickHandler is a closure function.

eventHandlerMap.set(eventNames.saveBtnClick, saveBtnClickHandler.saveHandler)

export = eventHandlerMap