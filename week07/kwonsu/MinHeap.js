class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 부모 인덱스 구하기
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 인덱스 구하기
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // 오른쪽 자식 인덱스 구하기
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // 부모가 있는지 확인
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    // 왼쪽 자식이 있는지 확인
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    // 오른쪽 자식이 있는지 확인
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    // 부모 노드 값 가져오기
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // 왼쪽 자식 노드 값 가져오기
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    // 오른쪽 자식 노드 값 가져오기
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    // 두 요소의 위치 바꾸기
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // 최솟값 확인 (제거하지 않음)
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    // 최솟값 제거 및 반환
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // 새로운 값 삽입
    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    // 위로 올라가면서 힙 속성 유지
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).dist > this.heap[index].dist) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    // 아래로 내려가면서 힙 속성 유지
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) &&
                this.rightChild(index).dist < this.leftChild(index).dist) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index].dist < this.heap[smallerChildIndex].dist) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    // 힙이 비어있는지 확인
    isEmpty() {
        return this.heap.length === 0;
    }

    // 힙의 크기
    size() {
        return this.heap.length;
    }
}

module.exports = MinHeap;