import { blockingFunc } from './blockingFunc.ts';

export const workerBlockingFunc = (iterations: number): number => {
  console.log(`Web Worker 処理開始`);

  // randomの合計を返す
  return blockingFunc(iterations);
};

