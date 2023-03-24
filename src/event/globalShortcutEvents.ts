import recordBtnClickHandler = require('../handlers/recordBtnClick')

const eventHandlerMap = new Map<string, () => (void)>()

eventHandlerMap.set('Alt+R', recordBtnClickHandler)

export = eventHandlerMap