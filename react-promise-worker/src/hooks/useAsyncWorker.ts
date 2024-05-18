import { Remote } from 'comlink';
import { useEffect, useRef } from 'react';
export default function useAsyncWorker(){
    // ComlinkWorkerをuseRefで保持
    const workerRef = useRef<Remote<typeof import("../worker")> | null>(null);

    useEffect(() => {
        // Workerを生成
        workerRef.current = new ComlinkWorker<typeof import("../worker")>(
            new URL("../worker", import.meta.url)
        )
    }, []);

    return workerRef satisfies typeof workerRef
}

