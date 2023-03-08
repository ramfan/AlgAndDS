import { Tree, TreeNode } from "../Tree/Tree";
import { AbstractRBTreeNode, ERBTreeColor, RBTreeNode } from "./RBTreeNode";

export class RBTree<T> extends Tree<T> {
    private root: TreeNode<T> = null;

    public override add(node: TreeNode<T>): void {
        if (this.root === null) {
            this.root = node;
        } else {
            this.addBy(node, this.root);
        }
    }

    public override remove(node: AbstractRBTreeNode<T>): void {
        throw new Error("Method not implemented.");
    }

    protected override transplant(
        source: TreeNode<T>,
        target: TreeNode<T>
    ): void {
        const rootParent: TreeNode<T> = source.getParent();
        if (rootParent !== null) {
            if (rootParent.getLeft().equals(source)) {
                rootParent.setLeft(target);
            } else if (rootParent.getRight().equals(source)) {
                rootParent.setRight(target);
            }
        }
        if (rootParent === null) {
            this.root = target;
        }
    }

    public override search(node: AbstractRBTreeNode<T>): AbstractRBTreeNode<T> {
        throw new Error("Method not implemented.");
    }

    private rightRotate(root: AbstractRBTreeNode<T>) {
        const leftSide = root.getLeft();
        leftSide.setRight(root);
        root.setLeft(leftSide.getRight());
        this.transplant(root, leftSide);
    }

    private leftRotate(root: AbstractRBTreeNode<T>) {
        const rightSide = root.getRight();
        rightSide.setLeft(root);
        root.setRight(rightSide.getLeft());
        this.transplant(root, rightSide);
    }

    private addBy(node: TreeNode<T>, root: TreeNode<T>) {
        if (!root) {
            return;
        }

        const compareResult = root.compareTo(node);

        if (compareResult <= 0) {
            const rightChild = root.getRight();

            if (!!rightChild) {
                return this.addBy(node, rightChild);
            } else {
                root.setRight(node);
                node.setParent(root);
                if (node instanceof AbstractRBTreeNode) {
                    node.setColor(ERBTreeColor.RED);
                } else {
                    throw new Error(
                        "Node must implements RBTreeNode interface."
                    );
                }
            }
        } else {
            const leftChild = root.getLeft();
            if (!!leftChild) {
                return this.addBy(node, leftChild);
            } else {
                root.setLeft(node);
                node.setParent(root);
                if (node instanceof AbstractRBTreeNode) {
                    node.setColor(ERBTreeColor.RED);
                } else {
                    throw new Error(
                        "Node must implements RBTreeNode interface."
                    );
                }
            }
        }
    }
}