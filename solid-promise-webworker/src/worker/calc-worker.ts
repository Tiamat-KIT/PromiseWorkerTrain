(globalThis as unknown as Worker).addEventListener("message",(event: MessageEvent<number>) => {
    const data = event.data
    let result = data
    for(let i = 0; i <= 100; i++){
        result += 1
    }
    globalThis.postMessage(result)
})