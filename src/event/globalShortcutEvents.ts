import recordBtnClickHandler = require('../handlers/recordBtnClick')
import eventNames = require('./eventNames')

const eventHandlerMap = new Map<string, () => (void)>()

const recordBtnClickFunc = () => {
    recordBtnClickHandler.recordHandler()// recordBtnClickHandler is a closure function.
}


eventHandlerMap.set(eventNames.recordBtnGlobalShortcut, recordBtnClickFunc)

export = eventHandlerMap