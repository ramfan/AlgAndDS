import { TreeNode } from "../Tree/Tree";
import { Node } from "../Tree/Node";

export enum ERBTreeColor {
    "RED" = "RED",
    "BLACK" = "BLACK",
}

export interface RBTreeNode<T> extends TreeNode<T> {
    getColor(): ERBTreeColor;
    setColor(color: ERBTreeColor): void;
}

export abstract class AbstractRBTreeNode<T = object>
    extends Node<T>
    implements RBTreeNode<T>
{
    private color: ERBTreeColor;

    constructor(value: T) {
        super(value);
        this.color = ERBTreeColor.BLACK;
        this.setLeft(this.buildNilNode());
        this.setRight(this.buildNilNode());
    }

    public getColor(): ERBTreeColor {
        return this.color;
    }

    public setColor(color: ERBTreeColor): void {
        this.color = color;
    }

    public abstract buildNilNode(): AbstractRBTreeNode<T>;
}
