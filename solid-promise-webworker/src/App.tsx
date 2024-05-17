import { createSignal } from 'solid-js'
import './App.css'
/* type WorkerResponse = {
  value: number,
  time: number
} */

function App() {
  const initialValue = 0
  function NotAwaitWorkerComp(initialValue: number){
    const [WorkerCount,setWorkerCount] = createSignal(initialValue)
    const now = performance.now()
    const worker = new Worker(new URL("./worker/calc-worker.ts",import.meta.url),{
      type: "module",
    })
    worker.postMessage(initialValue)
    worker.addEventListener("message",(event) => {
      console.log(event.data)
      const after = performance.now()
      console.log(`${event.data}が結果です ${(after - now) / 1000}秒で実行されました`)
    })
    
   /*  return {
      value: WorkerCount(),
      time: (after - now) / 1000
    } satisfies WorkerResponse */
  }

 /*  function AwaitWorkerComp(initialValue: number){
    const [AwaitWorkerCount, setAwaitWorkerCount] = createSignal(initialValue)
    const now = performance.now()
    const AwaitWorker = createWork<number>(new Worker(new URL("./worker/calc-worker.ts",import.meta.url),{
      type: "module",
    }))
    AwaitWorker(initialValue).then((data) => {
      setAwaitWorkerCount(data)
    })
    const after = performance.now()
    return {
      value: AwaitWorkerCount(),
      time: (after - now) / 1000
    } satisfies WorkerResponse
  } */
  const NotAwait = NotAwaitWorkerComp(initialValue)
  /* const Await = AwaitWorkerComp(initialValue) */
  return (
    <>
      <p>{initialValue}</p>
      {/* <p>NotAwait - 結果:{NotAwait.value} 経過時間:{NotAwait.time}秒</p> */}
      {/* <p>Await - 結果:{Await.value} 経過時間:{Await.time}秒</p>
      <p>AwaitTime - NotTime:{Await.time - NotAwait.time}秒</p> */}
    </>
  )
}

export default App
