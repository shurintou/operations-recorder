import { globalShortcut } from 'electron'
import globalShortcutEventHandlers = require('./globalShortcutEvents')
import { WebContents } from 'electron'

export = (content: WebContents) => {
    // to register globalShortcut events
    globalShortcutEventHandlers.forEach((v, k) => {
        function webContentEventEmit() {
            content.send(k)
            v()
        }
        globalShortcut.register(k, webContentEventEmit)
    })
}