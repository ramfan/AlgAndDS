import { TreeNode } from "./Tree";

export class NumericTreeNode implements TreeNode<number> {
    private readonly value: number;
    private left: NumericTreeNode = null;
    private right: NumericTreeNode = null;
    private parent: NumericTreeNode = null;

    constructor(value: number) {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public getLeft(): NumericTreeNode {
        return this.left;
    }

    public getRight(): NumericTreeNode {
        return this.right;
    }

    public setLeft(node: NumericTreeNode): void {
        this.left = node;
    }

    public setRight(node: NumericTreeNode): void {
        this.right = node;
    }

    public getParent(): NumericTreeNode {
        return this.parent;
    }

    public setParent(node: NumericTreeNode): void {
        this.parent = node;
    }

    public equals(o: NumericTreeNode): boolean {
        if (o === null) return false;
        if (o === this) return true;
        const rightSide = o.getRight();
        const leftSide = o.getLeft();
        const value = o.getValue();
        const parent = o.getParent();
        return (
            rightSide?.equals(this.right) &&
            leftSide?.equals(this.left) &&
            parent.equals(this.parent) &&
            value === this.value
        );
    }

    public compareTo(o: NumericTreeNode): 0 | 1 | -1 {
        const value = o.getValue();
        if (this.value > value) {
            return 1;
        }

        if (this.value < value) {
            return -1;
        }

        return 0;
    }

    public toString(): string {
        return JSON.stringify({
            value: this.value,
            left: this.left?.getValue(),
            right: this.right?.getValue(),
            // parent: this.parent.getParent()?.getValue(),
        });
    }
}
