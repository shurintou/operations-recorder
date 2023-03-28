import { dialog } from 'electron'

export = {
    saveHandler: (...args: any[]) => {
        dialog.showSaveDialog({
            filters: [
                { name: 'JSON', extensions: ['json'] },
            ],
            properties: ['createDirectory']
        })
    }
}