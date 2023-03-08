export type TComparator<T = any> = (a: T, b: T) => -1 | 0 | 1
export type TSort<T> = (data: T[], comparator: TComparator<T>) => T[]

export abstract class Sort{
    public static sort<T>(data: T[], comparator: TComparator<T>){
        throw new Error("Method isn't implemented");
    }
}