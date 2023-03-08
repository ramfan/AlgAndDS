import { TComparator } from "../index.types";
import { QSort } from "./QSort";

const numberComparator: TComparator = (a: number, b: number) => {
    if (a > b) {
        return 1;
    }

    if (a === b) {
        return 0;
    }

    return -1;
};

describe("Quick sorting test", () => {
    it("Sorting numbers", () => {
        const input = [4, 1, 52, 6, 12];
        const output = [1, 4, 6, 12, 52];
        const result = QSort.sort<number>(input, numberComparator);

        expect(result).toEqual(output);
    });
    it("Sorting numbers by length 2", () => {
        const input = [52, 12];
        const output = [12, 52];
        const result = QSort.sort<number>(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Sorting numbers by length 1", () => {
        const input = [12];
        const output = [12];
        const result = QSort.sort<number>(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Sorting empty list", () => {
        const input = [];
        const output = [];
        const result = QSort.sort<number>(input, numberComparator);
        expect(result).toEqual(output);
    });
    it("Sorting null", () => {
        expect(QSort.sort).toThrow("Data for sorting must have been is array");
    });
});
