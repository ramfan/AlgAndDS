import { Tree, TreeNode } from "./Tree/Tree";

export class BinaryTree<T> extends Tree<T> {
    private root: TreeNode<T> = null;

    public override add(node: TreeNode<T>): void {
        if (!this.root) {
            this.root = node;
            return;
        }

        this.addBy(node, this.root);
    }

    public override remove(node: TreeNode<T>): void {
        const leftChild = node.getLeft();
        const rightChild = node.getRight();
        //если у узла нет либо левого, либо правого, то делаем простую замену
        if (!leftChild || !rightChild) {
            if (!leftChild && rightChild) {
                this.transplant(node, rightChild);
            } else if (leftChild && !rightChild) {
                this.transplant(node, leftChild);
            }
        } else {
            //если у правого потомка нет левых потомков, то просто заменяем узлы, не забывая про левого потомка удаляемого узла
            if (rightChild.getLeft() === null) {
                this.transplant(node, rightChild);
            } else {
                /**
                 * Находим у правого поддерева минимального левого потомка
                 * и ставим вместо удаляемого
                 */
                const minLeftChild = this.min(rightChild.getLeft());
                this.transplant(node, minLeftChild);
                minLeftChild.getParent().setLeft(null);
            }
        }
    }

    protected override transplant(
        source: TreeNode<T>,
        target: TreeNode<T>
    ): void {
        const parent = source.getParent();
        const left = source.getLeft();
        const right = source.getRight();

        if (parent.getLeft().equals(source)) {
            parent.setLeft(target);
        } else if (parent.getRight().equals(source)) {
            parent.setRight(target);
        }

        if (target.getLeft() === null) {
            target.setLeft(left);
        } else {
            this.addBy(left, target);
        }

        if (target.getRight() === null) {
            target.setRight(right);
        } else {
            this.addBy(right, target);
        }
    }

    public override search(node: TreeNode<T>): TreeNode<T> {
        return this.searchBy(node, this.root);
    }

    private searchBy(node: TreeNode<T>, root: TreeNode<T>): TreeNode<T> | null {
        if (root === null) return null;
        if (root && root.equals(node)) {
            return root;
        }

        const rightSide = root.getRight();
        const leftSide = root.getLeft();
        const compareResult = root.compareTo(node);

        if (compareResult < 0) {
            return this.searchBy(node, rightSide);
        } else if (compareResult >= 0) {
            return this.searchBy(node, leftSide);
        }

        return null;
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
            }
        } else {
            const leftChild = root.getLeft();
            if (!!leftChild) {
                return this.addBy(node, leftChild);
            } else {
                root.setLeft(node);
                node.setParent(root);
            }
        }
    }

    private min(root: TreeNode<T>): TreeNode<T> {
        if (root.getLeft() === null) {
            return root;
        }

        return this.min(root.getLeft());
    }

    public toString(): string {
        return JSON.stringify(this.root);
    }
}
