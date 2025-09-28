/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/49189
 *
 * [아이디어]
 * 그냥 별 생각없이 3번 문제 푼 방식(다익스트라)으로 생각했으며,
 * 가중치(거리)를 모두 1로 적용하여 3번 문제와 동일한 방식으로 해결
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모/자식 인덱스 계산
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // 두 노드 교환
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  // 힙에 원소 추가
  push(node) {
    this.heap.push(node);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    // 최소 힙 조건 만족할 때까지 위로 올림
    while (
      parentIndex >= 0 &&
      this.heap[parentIndex][0] > this.heap[currentIndex][0]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  // 힙에서 최솟값(루트) 제거 및 반환
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    // 최소 힙 조건 만족할 때까지 아래로 내림
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][0] < this.heap[smallestChildIndex][0]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex][0] < this.heap[smallestChildIndex][0]) {
        break;
      }

      this.swap(currentIndex, smallestChildIndex);
      currentIndex = smallestChildIndex;
    }
    return minValue;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(N, road) {
  // 1. 그래프 생성
  const graph = new Array(N + 1).fill(0).map((item) => []);
  for ([node1, node2] of road) {
    graph[node1].push([node2, 1]);
    graph[node2].push([node1, 1]);
  }

  // 2. 미니 힙 큐 생성
  const queue = new MinHeap();

  // 3. 거리 배열
  const dist = new Array(N + 1).fill(Infinity);

  // 4. 탐색
  // [비용, 마을번호]
  queue.push([0, 1]);
  dist[1] = 0;

  while (!queue.isEmpty()) {
    const [currentCost, currentNode] = queue.pop();

    // 이미 더 짧은 거리를 알고있다면 pass
    if (dist[currentNode] < currentCost) {
      continue;
    }

    // 현재 노드와 연결된 다른 노드들 확인
    for (const [nextNode, nextCost] of graph[currentNode]) {
      const newCost = currentCost + nextCost;

      if (newCost < dist[nextNode]) {
        dist[nextNode] = newCost; // 더 짧은 경로 발견 시 갱신
        queue.push([newCost, nextNode]);
      }
    }
  }

  // 가장큰 수
  const maximum = dist
    .filter((item) => item !== Infinity)
    .sort((a, b) => b - a)[0];

  const res = dist.filter((item) => item === maximum).length;
  return res;
}

const res1 = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]); // 3

console.log(res1);
