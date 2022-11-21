export interface Comparable<T> {
    compareTo(o: T): 1 | 0 | -1;
}

export interface TreeNode<T = object> extends Comparable<TreeNode<T>> {
    getValue(): T;
    getLeft(): TreeNode<T>;
    getRight(): TreeNode<T>;
    setLeft(node: TreeNode<T>): void;
    setRight(node: TreeNode<T>): void;
    getParent(): TreeNode<T>;
    setParent(node: TreeNode<T>): void;
    equals(o: TreeNode<T> | null): boolean;
}

export abstract class Tree<T> {
    public abstract add(node: TreeNode<T>): void;
    public abstract remove(node: TreeNode<T>): void;
    protected abstract transplant(
        source: TreeNode<T>,
        target: TreeNode<T>
    ): void;
    public abstract search(node: TreeNode<T>): TreeNode<T> | null;
}
