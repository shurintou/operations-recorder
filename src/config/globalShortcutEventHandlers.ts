import mouseMove = require('../mouse/mouseMove')

const eventHandlerMap = new Map<string, () => (void)>()

eventHandlerMap.set('Alt+S', mouseMove)

export = eventHandlerMap