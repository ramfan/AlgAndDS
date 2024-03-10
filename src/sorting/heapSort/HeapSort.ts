import { Heap } from "../../heap/Heap";
import { Sort, TComparator } from "../index.types";

export class HeapSort extends Sort {
    public static override sort<T = unknown>(data: T[], comparator: TComparator<T>): T[] {
        if(!data.length){
            return data;
        }

        const heap = new Heap<T>(comparator, data, "MAX");
        for(let i = data.length - 1; i > 0; i--) {
            heap.swap(0, i);
            heap.heapSize--;
            heap.heapify();
        }
        return heap.getHeapAsArray();
    }
}
