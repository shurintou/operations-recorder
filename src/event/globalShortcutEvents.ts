import recordBtnClickHandler = require('../handlers/recordBtnClick')

const eventHandlerMap = new Map<string, () => (void)>()

eventHandlerMap.set('Alt+R', recordBtnClickHandler()) // recordBtnClickHandler is a closure function.

export = eventHandlerMap