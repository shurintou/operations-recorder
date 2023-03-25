import { mouse } from "@nut-tree/nut-js"

export = (...args: any) => {
    function recordHandler() {
        let isRecording: boolean = false
        let timer: NodeJS.Timer = null
        function timerHandler() {
            if (isRecording === false) {
                isRecording = true
                timer = setInterval(() => { mouse.getPosition().then((res: { x: number, y: number }) => console.log(res)) }, 1000)
            }
            else {
                isRecording = false
                clearTimeout(timer)
            }
        }
        return timerHandler
    }
    return recordHandler()
}