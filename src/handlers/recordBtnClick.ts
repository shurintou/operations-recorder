import { mouse } from "@nut-tree/nut-js"

export = {
    recordHandler: (...args: any) => {
        let isRecording: boolean = false
        let timer: NodeJS.Timer = null
        function recordHandler() {
            if (isRecording === false) {
                isRecording = true
                timer = setInterval(() => { mouse.getPosition().then((res: { x: number, y: number }) => console.log(res)) }, 1000)
            }
            else {
                isRecording = false
                clearTimeout(timer)
            }
        }
        return recordHandler
    },

}

