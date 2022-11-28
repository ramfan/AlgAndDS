import { TreeNode } from "./Tree";

export abstract class Node<T> implements TreeNode<T> {
    protected readonly value: T;
    protected left: TreeNode<T> = null;
    protected right: TreeNode<T> = null;
    protected parent: TreeNode<T> = null;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public getLeft(): TreeNode<T> {
        return this.left;
    }

    public getRight(): TreeNode<T> {
        return this.right;
    }

    public setLeft(node: TreeNode<T>): void {
        this.left = node;
    }

    public setRight(node: TreeNode<T>): void {
        this.right = node;
    }

    public getParent(): TreeNode<T> {
        return this.parent;
    }

    public setParent(node: TreeNode<T>): void {
        this.parent = node;
    }

    public toString(): string {
        return JSON.stringify({
            value: this.value,
            left: this.left?.getValue(),
            right: this.right?.getValue(),
        });
    }

    public abstract equals(o: TreeNode<T>): boolean;
    public abstract compareTo(o: TreeNode<T>): 0 | 1 | -1;
}
