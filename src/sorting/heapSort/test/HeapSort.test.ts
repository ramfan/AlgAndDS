import { TComparator } from "../../index.types";
import { HeapSort } from "../HeapSort";

const numberComparator: TComparator = (a: number, b: number) => {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

describe("Тестирование класса HeapSort", () => {
    it("Базовая сортировка", () => {
        const input = [4, 1, 52, 6, 12];
        const output = [1, 4, 6, 12, 52];
        const result = HeapSort.sort(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Базовая сортировка из 1 элемента", () => {
        const input = [1];
        const output = [1];
        const result = HeapSort.sort(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Базовая сортировка пустого массива", () => {
        const input = [];
        const output = [];
        const result = HeapSort.sort(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Сортировка с повторяющимися элементами", () => {
        const input = [4, 1, 1, 1, 52, 6, 12];
        const output = [1, 1, 1, 4, 6, 12, 52];
        const result = HeapSort.sort(input, numberComparator);
        expect(result).toEqual(output);
    });
});
