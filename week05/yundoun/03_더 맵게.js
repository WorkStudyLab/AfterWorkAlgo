
//         A(0)
//        /   \
//    B(1)     C(2)
//    / \      / \
//  D(3) E(4) F(5) G(6)

// 위 트리를 레벨 순서대로 배열에 저장하면
// [ A, B, C, D, E, F, G ]
//   0  1  2  3  4  5  6  ← 배열 인덱스

// 트리를 왼쪽부터 차례대로 줄 세운 배열이라서
// 왼쪽/오른쪽 자식은 2배 + offset
// 부모는 반으로 나누기라는 규칙이 생김
// 즉, i의 자식은 항상 뒤쪽에, 부모는 항상 앞쪽에 있다는 보장이 있다.

class MinHeap {
  constructor(){
    // 힙의 저장소(완전 이진트리를 레벨 순서대로 담음)
    this.heap = [];
  }

  // 부모/자식 인덱스 구하기 이해안가면 그냥 외우자
  // 부모 노드의 규칙
  getParentIndex(i) { return Math.floor((i-1) / 2 ); }
  // 인덱스 i의 왼쪽 자식은 언제나 (2*i +1)
  getLeftChildIndex(i) {return i*2 + 1;}
  // 인덱스 i의 오른쪽 자식은 언제나 (2*i + 2)
  getRightChildIndex(i) {return i*2 + 2;}

  // 배열의 두 인덱스 값을 교환
  // O(1) 위치만 바꿔줌
  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 삽입
  // 맨끝(레벨에서 가장 오른쪽 아래)에 넣는다.
  push(value){
    // 새 값을 배열 끝에 붙인다.
    this.heap.push(value);
    // 부모와 비교하며 위로 올라간다.
    this.bubbleUp();
  }

  // 부모와 비교하면서 위로 올림(필요시 swap)
  // 끝나면 힙 불변식 (부모 <= 자식) 복구함
  bubbleUp(){
    let index = this.heap.length - 1;
    while (index > 0 ){
      let parent = this.getParentIndex(index);
      if (this.heap[parent] <= this.heap[index]) break;
      this.swap(parent, index);
      index = parent;
    }
  }

  // 최소값 제거
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return root;
  }

  // 현재 노드와 두 자식 중 더 작은 쪽 비교해서 필요하면 내려가며 교환함
  bubbleDown(index){
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]){
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]){
      smallest = right;
    } 

  if (smallest !== index){
    this.swap(index, smallest);
    this.bubbleDown(smallest);
    }
  }
}

function solution(scoville, K) {
    var answer = 0;
    
    let heap = new MinHeap();
    
    // 힙에 스코빌 값 모두 넣기
    for (let i of scoville){
        heap.push(i);
    }
    
    // heap클래스 내의 heap에 접근해야 해서 heap.heap임
    // 뽑을게 없거나 타겟 넘으면 종료
    while(heap.heap.length >= 2 && heap.heap[0] < K){
        let x = heap.pop()
        let y = heap.pop()
        heap.push(x+ y*2)
        answer++
    }
    
    // 예외처리
    return heap.heap[0] >= K ? answer : -1;
}