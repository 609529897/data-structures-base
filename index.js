let heap = []

function 

function shiftUp(i) {
  let _val = Math.floor((i - 1) / 2)

}

function insert(val) {
  heap.push(val)
  shiftUp()
}

class Heap {

  constructor() {
    this.heap = []
  }

  swap(idx1, idx2) {
    let h = this.heap
    [h[idx1], h[idx2]] = [h[idx2], h[idx1]]
  }

  shiftUp(idx) {
    let _idx = Math.floor((i - 1) / 2)

    if (!_idx) {
      return
    }

    if (_idx !== 0 && this.heap[idx] > this.heap[_idx]) {
      this.swap(idx, _idx)
      shiftup(_idx);
    }

  }

  
}

const heapInstace = new Heap()