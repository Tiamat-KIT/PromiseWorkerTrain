/* import useAsyncWorker from "./hooks/useAsyncWorker.ts"
import { blockingFunc } from './blockingFunc'; */

import './App.css';
function App() {
  /* const CountArray = [100,200,300]
  const worker = useAsyncWorker()

  // comlink(web worker)による非同期処理。アニメーションが止まらない
  const handleClickWorker = () => {
    if (worker.current) {
      CountArray.forEach(async(data) => {
        const start_time = performance.now()
        console.log('start workerBlockingFunc()');
        const result = await worker.current!.workerBlockingFunc(data);
        console.log(`end workerBlockingFunc(): ${result} time:${(performance.now() - start_time)/1000}秒`);
      })
      
    }
  };

  // 同期処理(画面のアニメーションが止まる)
  const handleClickSync = async () => {
    if (worker.current) {
      CountArray.forEach((data) => {
        const start_time = performance.now()
        console.log('start blockingFunc()');
        const result = blockingFunc(data);
        console.log(`end blockingFunc(): ${result} time:${(performance.now() - start_time)/1000}秒`);
      })
    }
  }; */

  return (
    <div>
      {/* <button onClick={() => handleClickWorker()}>
        時間がかかる関数をcomlinkで非同期的に実行
      </button>
      <br />
      <button onClick={() => handleClickSync()}>
        時間がかかる関数を同期的に実行
      </button>
      <div className="return">実行結果はDevToolsのConsoleに出力されます。</div> */}
      
    </div>
  );
}

export default App;
