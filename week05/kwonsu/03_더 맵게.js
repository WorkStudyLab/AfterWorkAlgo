// 아이디어
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 스코빌 지수가 K 이상이 될 때까지 반복문 실행
// scoville 배열을 오름차순 정렬
// scoville[0] < K 이면 반복문 실행
// 가장 앞에 있는 두 개의 값을 꺼내서 섞은 음식의 스코빌 지수를 구함
// 섞은 음식의 스코빌 지수를 다시 배열에 넣음
// count ++
// 최종적으로 count 리턴

// function solution(scoville, K) {
//     let count = 0;

//     // 오름차순 정렬
//     scoville.sort((a, b) => a - b);

//     while (scoville[0] < K) {
//         // 가장 앞에 있는 두 개의 값을 꺼내서 섞은 음식의 스코빌 지수를 구함
//         const first = scoville.shift();
//         const second = scoville.shift();
//         const newScoville = first + second * 2;

//         // 섞은 음식의 스코빌 지수를 다시 배열에 넣음
//         scoville.push(newScoville);
//         // 오름차순 정렬
//         scoville.sort((a, b) => a - b);

//         count += 1;
//         // 모든 음식을 섞었는데도 K 이상이 되지 않는 경우 -1 리턴
//         if (scoville.length === 1 && scoville[0] < K) {
//             return -1;
//         }
//     }

//     return count;
// }
// console.log(solution([1, 2, 3, 9, 10, 12], 7));

// 효율성 실패 : 정렬 때문에 시간초과
// 해결 방안 : 우선순위 큐(힙) 사용

// 각 요소를 표현하는 노드 클래스
class Node {
  constructor(element, priority) {
    this.element = element; // 실제 데이터
    this.priority = priority; // 우선순위 값
  }
}

// 최소 힙을 이용한 우선순위 큐
class PriorityQueue {
  constructor() {
    this.values = []; // 힙을 저장할 배열
  }

  // 헬퍼 함수: 두 노드의 위치를 바꿈
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  // 데이터 추가 (Enqueue)
  enqueue(element, priority) {
    const newNode = new Node(element, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  // 추가된 요소의 위치를 찾아 올라가는 과정 (Heapify Up)
  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentElement = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentElement = this.values[parentIndex];

      // 부모의 우선순위가 더 낮거나 같으면 제자리를 찾은 것이므로 중단
      if (parentElement.priority <= currentElement.priority) break;

      // 부모의 우선순위가 더 높으면 자리를 바꿈
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  // 데이터 추출 (Dequeue) - 우선순위가 가장 높은 요소
  dequeue() {
    if (this.values.length === 0) return null;

    const min = this.values[0]; // 루트(최소 우선순위)
    const end = this.values.pop(); // 가장 마지막 요소

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(); // 루트의 위치를 찾아 내려가는 과정
    }

    return min;
  }

  // 루트 요소의 위치를 찾아 내려가는 과정 (Heapify Down)
  sinkDown() {
    let currentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      // 왼쪽 자식 확인
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex;
        }
      }

      // 오른쪽 자식 확인
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      // 바꿀 자리가 없으면 제자리를 찾은 것이므로 중단
      if (swapIndex === null) break;

      // 자리를 바꾸고 인덱스 업데이트
      this.swap(currentIndex, swapIndex);
      currentIndex = swapIndex;
    }
  }
}

function solution(scoville, K) {
  let count = 0;
  const pq = new PriorityQueue();

  // 모든 스코빌 지수를 우선순위 큐에 추가
  for (let i = 0; i < scoville.length; i++) {
    pq.enqueue(scoville[i], scoville[i]);
  }

  while (pq.values.length > 1 && pq.values[0].priority < K) {
    // 가장 맵지 않은 음식과 두 번째로 맵지 않은 음식을 꺼냄
    const first = pq.dequeue().element;
    const second = pq.dequeue().element;
    const newScoville = first + second * 2;

    // 섞은 음식의 스코빌 지수를 다시 우선순위 큐에 넣음
    pq.enqueue(newScoville, newScoville);

    count += 1;
  }

  // 모든 음식을 섞었는데도 K 이상이 되지 않는 경우 -1 리턴
  if (pq.values[0].priority < K) {
    return -1;
  }

  return count;
}
console.log(solution([1, 2, 3, 9, 10, 12], 7));
