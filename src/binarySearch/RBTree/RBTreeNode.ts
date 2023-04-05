import { TreeNode } from "../Tree/Tree";
import { Node } from "../Tree/Node";
import { assert } from "../../utils";

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

    public override setLeft(node: TreeNode<T>): void {
        assert(
            !!(node instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );
        super.setLeft(node);
    }

    public override setRight(node: TreeNode<T>): void {
        assert(
            !!(node instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );
        super.setRight(node);
    }

    public override setParent(node: TreeNode<T>): void {
        assert(
            !!(node instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );

        super.setParent(node);
    }

    public override getLeft(): AbstractRBTreeNode<T> {
        assert(
            !!(this.left instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );

        return this.left;
    }

    public override getRight(): AbstractRBTreeNode<T> {
        assert(
            !!(this.right instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );

        return this.right;
    }

    public override getParent(): AbstractRBTreeNode<T> {
        assert(
            !!(this.parent instanceof AbstractRBTreeNode),
            "Node must implements RBTreeNode interface."
        );

        return this.parent;
    }

    public getColor(): ERBTreeColor {
        return this.color;
    }

    public setColor(color: ERBTreeColor): void {
        this.color = color;
    }

    public abstract buildNilNode(): AbstractRBTreeNode<T>;
}
