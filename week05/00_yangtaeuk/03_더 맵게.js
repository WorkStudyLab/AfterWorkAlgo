/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 *
 * [제약사항]
 * scoville의 길이는 2 이상 1,000,000 이하
 * K는 0 이상 1,000,000,000 이하
 * scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
 * 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙의 크기를 반환
  size() {
    return this.heap.length;
  }

  // 새로운 요소 추가
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 가장 작은(최소 우선순위) 요소 제거 및 반환
  pop() {
    if (this.size() === 0) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // 가장 작은 요소 확인 (제거하지 않음)
  peek() {
    return this.heap[0] || null;
  }

  // 힙의 속성을 유지하기 위해 요소를 위로 이동시키는 메서드
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      // 부모 노드와 현재 노드의 위치 교환
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // 힙의 속성을 유지하기 위해 요소를 아래로 이동시키는 메서드
  bubbleDown() {
    let index = 0;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      // 왼쪽 자식과 비교
      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      // 오른쪽 자식과 비교
      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) {
        break;
      }

      // 가장 작은 자식 노드와 위치 교환
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let answer = 0;
  for (let i = 0; i < scoville.length; i++) {
    const item = scoville[i];
    heap.push(item);
  }

  while (heap.peek() < K && heap.size() > 1) {
    const small1 = heap.pop();
    const small2 = heap.pop();

    const newItem = small1 + small2 * 2;
    heap.push(newItem);
    answer++;
  }

  if (heap.peek() >= K) return answer;
  else return -1;
}
// 문제 예시 케이스
const res = solution([1, 2, 3, 9, 10, 12], 105); //2
console.log(res);
