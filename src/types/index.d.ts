export { }

interface MouseHandler {
    moveMouse: Function
}

declare global {
    interface Window {
        mouseHandler: MouseHandler
    }
}