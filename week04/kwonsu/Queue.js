// 노드(Node) 클래스: 데이터와 다음 노드를 가리키는 포인터를 가집니다.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 연결 리스트 기반의 큐 클래스
class Queue {
    constructor() {
        this.head = null; // 큐의 가장 앞 (제거되는 곳)
        this.tail = null; // 큐의 가장 뒤 (추가되는 곳)
        this.size = 0;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.isEmpty()) {
            // 큐가 비어있으면 head와 tail이 모두 새 노드를 가리킵니다.
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 비어있지 않으면 기존 tail의 next가 새 노드를 가리키고,
            // tail을 새 노드로 업데이트합니다.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return;
        const value = this.head.value; // 반환할 값
        this.head = this.head.next;   // head를 다음 노드로 이동
        this.size--;
        // 만약 dequeue 후 큐가 비게 되면 tail도 null로 설정합니다.
        if (this.isEmpty()) {
            this.tail = null;
        }
        return value;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.head ? this.head.value : undefined;
    }
}

module.exports = Queue;