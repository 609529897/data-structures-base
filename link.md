# 链表

## 特点

- 数值和指向下一个元素的指针组成
- 在**增加**和**删除**时比较容易实现 O(1) 的时间复杂度，当查找时需要遍历整个链表
- 当数据的个数不确定，且需要经常新增和删除时比较适合使用

## 分类

- 单向链表
- 双向链表
- 循环链表
- 双向循环链表

## 实现

- 单向链表

```javascript
let _len = Symbol("_len")

class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

class singleLink() {
  constructor () {
    this.head = new Node("head")
    this.currentNode = this.head
    this[_len] = 0
  }
  find(ele) {
    let current = this.head
    while(current.element !== ele) {
       current = current.next
    }
    return current
  }
  findPre(ele) {
    let current = this.head
    while (current.next !== null && current.next.element !== ele) {
      current = current.next
    }
    return current
  }
  insert(item, ele) {
    let newNode = new Node(ele)
    let current = this.find(item)
    newNode.next = current.next
    current.next = newNode
    this[_len]++
  }
  remove(ele) {
    let current = this.find(ele)
    if (current.next) {
      current.next = current.next.next
      this[_len]--
    }
  }
  display() {
    let current = this.head
    while(current.next !== null) {
      console.log(current.element)
      current = current.next
    }
  }
  /**
   * 当前元素 [this.currentNode] 向前移动 @param {number} n 数
  */
  advance (n) {
    if (!n) return n
    let idx = 0
    while (idx < n && this.currentNode.next !== null) {
        this.currentNode = this.currentNode.next
        idx++
    }
  }
  show ()
    return this.currentNode.element
  }
  isEmpty () {
    this[_len] === 0
  }
  size () {
    return this[_len]
  }
}
```

- 双向链表
- 循环链表

## 案例

- 链表反转（递归，迭代）
- 快慢指针

链表反转

```javascript
// 迭代
function reverse(head) {
  let current = head
  let temp = null
  let previous = null
  
  while (current) {
    temp = current.next
    current.next = previous
    previous = current
    current = temp
  }
  return previous
}
```

```javascript
// 递归
function reverse(head) {
  if (head === null || head.next === null) {
    return head
  }
  let current = reverse(head.next)
  head.next.next = head
  head.next = null
  return current
}
```

给定一个奇数个元素的链表，查找出这个链表中间位置的结点的数值（快慢）

````javascript
function middleNode(head) {
  let fast = head
  let slow = head
  while (fast && fast.next && fase.next.next) {
     fast = head.next.next
     slow = head.next
  }
  return slow
}
````

判断链表是否有环

```javascript
function exitLoop(head) {
  let slow = head
  let fast = head
  while (fast && fast.next && fast.next.next) {
     fast = head.next.next
     slow = head.next
     if (fase === slow) {
         return true
     }
  }
  return false
}
```