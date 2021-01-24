class HeapDS {
  heap: Array<number>;
  constructor() {
    this.heap = [];
  }

  getparentIndex(index: number) {
    return Math.floor((index + 1) / 2) - 1;
  }

  getChildIndex(index: number) {
    return {
      left: 2 * index + 1,
      right: 2 * index + 2,
    };
  }

  insert(value: number) {
    if (!this.heap.length) {
      this.heap.push(value);
    } else {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = this.getparentIndex(currentIndex);
      while (
        parentIndex >= 0 &&
        this.heap[currentIndex] > this.heap[parentIndex]
      ) {
        // SWAP THE VALUES
        var temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[parentIndex];
        this.heap[parentIndex] = temp;

        // CHANGE THE INDICES
        currentIndex = parentIndex;
        parentIndex = this.getparentIndex(currentIndex);
      }
    }
  }

  process() {
    let topElement = this.heap[0];

    this.heap[0] = this.heap.pop() as number;

    let currentIndex = 0;
    let leftChildIndex = this.getChildIndex(currentIndex).left;
    let rightChildIndex = this.getChildIndex(currentIndex).right;

    let desiredIndex =
      this.heap[rightChildIndex] &&
      this.heap[rightChildIndex] >= this.heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    while (this.heap[desiredIndex] > this.heap[currentIndex]) {
      let temp = this.heap[desiredIndex];
      this.heap[desiredIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;

      currentIndex = desiredIndex;
      let leftChildIndex = this.getChildIndex(currentIndex).left;
      let rightChildIndex = this.getChildIndex(currentIndex).right;

      desiredIndex =
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] >= this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
    }

    return topElement;
  }
}

const myHeap = new HeapDS();
myHeap.insert(250);
myHeap.insert(200);
myHeap.insert(150);
myHeap.insert(149);
myHeap.insert(145);

console.log(myHeap);
myHeap.process();
console.log(myHeap);
