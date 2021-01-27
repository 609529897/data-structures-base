
class BinarySearchTree {
  constructor() {

  }
  transverse() {
    return this.__transverse(this.root);
  }

  *__transverse(node) {
    if (!node) {
      return;
    }
    yield* this.__transverse(node.left);
    yield node;
    yield* this.__transverse(node.right);
  }
}

const tree = new BinaryTree();
//do something
const arr = [...tree.transverse()].map(item=>item.key);