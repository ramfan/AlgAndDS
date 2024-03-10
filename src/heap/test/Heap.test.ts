import { Heap } from "../Heap";

const comparator = (a: number, b: number) => {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

describe("Тестирование класса Heap", () => {
    it("Тестирование построения кучи от максимального", () => {
        const source = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
        const expected = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
        const heap = new Heap<number>(comparator, source);
        expect(heap.getHeapAsArray()).toEqual(expected);
    });

    it("Тестирование построения кучи от минимального", () => {
        const source = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
        const expected = [1, 2, 3, 4, 7, 9, 10, 14, 8, 16];
        const heap = new Heap<number>(comparator, source, "MIN");
        expect(heap.getHeapAsArray()).toEqual(expected);
    });

    it("Тестирование построения пустой кучи", () => {
        const source = [];
        const expected = [];
        const heap = new Heap<number>(comparator, source);
        expect(heap.getHeapAsArray()).toEqual(expected);
    });
    it("Тестирование построения кучи от максимального с одинаковыми элементами", () => {
        const source = [4, 1, 3, 2, 16, 9, 10, 14, 8, 8, 7];
        const expected = [16, 14, 10, 8, 8, 9, 3, 2, 4, 1, 7];
        const heap = new Heap<number>(comparator, source);
        expect(heap.getHeapAsArray()).toEqual(expected);
    });
});
