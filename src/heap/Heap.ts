import { ComparatorType } from "../types";
import { assert } from "../utils";

type HeapDirectionType = "MAX" | "MIN";

export class Heap<T> {
    private readonly heap: T[];
    private readonly comparator: ComparatorType<T> | undefined;
    private readonly type: HeapDirectionType;
    private _heapSize = 0;

    constructor(
        comparator: ComparatorType<T>,
        initialHeap: T[] = [],
        type: HeapDirectionType = "MAX"
    ) {
        this.heap = initialHeap;
        this._heapSize = this.heap.length - 1;
        assert(
            typeof comparator !== "function",
            "Comparator must have type Function"
        );
        this.comparator = comparator;
        this.type = type;

        if (!!this.heap.length && this.heap.length > 1) {
            this.build();
        }
    }

    public get heapSize() {
        return this._heapSize;
    }
    
    public set heapSize(size: number) {
        this._heapSize = size;
    }

    private isValidIndex(index: number) {
        return index >= 0 && index <= this._heapSize;
    }

    public swap(from: number, to: number) {
        assert(!this.isValidIndex(from), "out of bound: from = " + from);
        assert(!this.isValidIndex(to), "out of bound: to = " + to);
        const tmp = this.heap[from];
        this.heap[from] = this.heap[to];
        this.heap[to] = tmp;
    }

    public getLeftIndex(index: number) {
        assert(typeof index !== "number", `index (${index}) is not a number`);
        return 2 * index + 1;
    }

    public getRightIndex(index: number) {
        assert(typeof index !== "number", `index (${index}) is not a number`);
        return 2 * index + 2;
    }

    public getParentIndex(index: number) {
        assert(typeof index !== "number", `index (${index}) is not a number`);
        return Math.round(index / 2) - 1;
    }

    private compareByDirection(i: number, j: number) {
        const compareResult = this.comparator(this.heap[i], this.heap[j]);

        if (this.type === "MAX") {
            return compareResult >= 0;
        }

        return compareResult <= 0;
    }

    public heapify(index: number = 0) {
        if (!this.isValidIndex(index)) {
            return;
        }

        const right = this.getRightIndex(index);
        const left = this.getLeftIndex(index);

        let nextIndex = index;

        if (left <= this._heapSize && this.compareByDirection(left, index)) {
            nextIndex = left;
        }

        if (
            right <= this._heapSize && this.compareByDirection(right, nextIndex)
        ) {
            nextIndex = right;
        }

        if (nextIndex !== index) {
            this.swap(index, nextIndex);
            this.heapify(nextIndex);
        }
    }

    private build() {
        const upLimit = Math.floor((this._heapSize + 1) / 2);
        for (let i = upLimit; i >= 0; i--) {
            this.heapify(i);
        }
    }

    public add(element: T) {
        this.heap.push(element);
        this.build();
        return this;
    }

    public getHeapAsArray(): T[] {
        return this.heap;
    }
}
