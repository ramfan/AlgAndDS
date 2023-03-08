import { Sort, TComparator } from "../index.types";

export class QSort extends Sort {
    public static override sort<T>(data: T[], comparator: TComparator): T[] {
        if (!Array.isArray(data)) {
            throw new Error("Data for sorting must have been is array");
        }

        if (data.length < 2) {
            return data;
        }
        return this.qsort(data, 0, data.length - 1, comparator);
    }

    private static swap<T>(data: T[], from: number, to: number) {
        const tmp = data[from];
        data[from] = data[to];
        data[to] = tmp;
    }

    private static partition<T>(
        data: T[],
        low: number,
        heigh: number,
        comparator: TComparator
    ): number {
        let pivot = low;
        for (let i = low; i < heigh; i++) {
            const comparisonResult = comparator(data[i], data[heigh]);
            if (comparisonResult < 0) {
                this.swap(data, i, pivot);
                pivot += 1;
            } else {
                this.swap(data, pivot, heigh);
            }
        }
        return pivot;
    }

    private static qsort<T>(
        data: T[],
        low: number,
        heigh: number,
        comparator: TComparator
    ) {
        if (low < heigh) {
            const pivot = this.partition(data, low, heigh, comparator);
            this.qsort(data, low, pivot - 1, comparator);
            this.qsort(data, pivot + 1, heigh, comparator);
        }
        return data;
    }
}
