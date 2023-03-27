import recordBtnClickHandler = require('../handlers/recordBtnClick')

const eventHandlerMap = new Map<string, () => (void)>()

const recordBtnClickFunc = () => {
    recordBtnClickHandler.recordHandler()// recordBtnClickHandler is a closure function.
}


eventHandlerMap.set('Alt+R', recordBtnClickFunc)

export = eventHandlerMap