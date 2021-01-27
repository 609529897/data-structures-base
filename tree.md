# 二叉树

## 二叉树的三个性质

1. 在二叉树的第 i 层上，至多有 2^(i-1) 个节点,i=1 时，只有一个根节点，2^(i-1) = 2^0 = 1

2. 深度为 k 的二叉树至多有 2^k-1 个节点, i=2 时，2^k-1 = 2^2 - 1 = 3 个节点

3. 对任何一棵二叉树 T，如果总结点数为 n0，度为 2(子树数目为 2)的节点数为 n2,则 n0=n2+1

## 树和二叉树的三个主要差别

- 树的节点个数至少为 1，而二叉树的节点个数可以为 0

- 树中节点的最大度数(节点数量)没有限制,而二叉树的节点的最大度数为 2

- 树的节点没有左右之分，而二叉树的节点有左右之分

```javascript
class BinaryTreeNode {
  constructor(key, value) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.key = key;
    this.value = value;
  }
}
```

## 二叉搜索树

```javascript
class BinaryTreeNode {
  constructor(key, value) {
    // 指向父节点
    this.p = null;

    // 左节点
    this.left = null;

    // 右节点
    this.right = null;

    // 键
    this.key = key;

    // 值
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  static createNode(key, value) {
    return new BinaryTreeNode(key, value);
  }

  search(key) {
    let p = this.root;
    if (!p) {
      return;
    }

    while (p && p.key !== key) {
      if (p.key < key) {
        p = p.right;
      } else {
        p = p.left;
      }
    }

    return p;
  }

  insert(node) {
    // 尾指针的父节点指针
    let p = this.root;

    // 尾指针
    let tail = this.root;

    while (tail) {
      p = tail;
      if (node.key < tail.key) {
        tail = tail.left;
      } else {
        tail = tail.right;
      }
    }

    if (!p) {
      this.root = node;
      return;
    }

    // 插入
    if (p.key < node.key) {
      p.right = node;
    } else {
      p.left = node;
    }

    node.p = p;
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
```

## 前中后序遍历

```javascript

```

## 层序遍历

## 字典树
