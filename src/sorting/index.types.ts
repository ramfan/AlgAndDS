export type TComparator<T = any> = (a: T, b: T) => -1 | 0 | 1;
export type TSort<T> = (data: T[], comparator: TComparator<T>) => T[];

export abstract class Sort {
    protected static swap<T>(data: T[], from: number, to: number) {
        const tmp = data[from];
        data[from] = data[to];
        data[to] = tmp;
    }

    public static sort<T>(data: T[], comparator: TComparator<T>): T[] {
        throw new Error("Method isn't implemented");
    }
}
