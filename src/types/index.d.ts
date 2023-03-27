export { }

interface ElectronAPI {
    onToggleButton: Function
}

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}