import { Node } from "../Tree/Node";

export class NumericTreeNode extends Node<number> {
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
}
