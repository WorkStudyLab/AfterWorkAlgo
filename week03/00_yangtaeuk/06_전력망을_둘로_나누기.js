/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 *
 * [문제조건]
 * - node 개수는 2~100
 * - wires 개수는 node 개수 -1개
 *
 * [아이디어]
 * 1. Node Class를 만든다.
 *  - 노드 객체는 자신과 연결된 노드를 기억한다.
 *  - getLinked 메서드는 연결된 노드들을 순회하며 인자로 받은 배열에 저장한다.
 * 2. 노드끼리 연결한다.
 * 3. 노드를 순회하며 연결된 노드끼리 배열에 담는다.
 *  - 두개의 배열 length의 차를 구한다.
 * 4. 2~3번 작업을 wire를 하나씩 제거하며 반복한다.
 * 5. 차이가 가장 작은 값을 반환한다.
 */

/**
 * @property {Number} num node별 number
 * @property {Set} linkedSet 연결된 Node들을 담을 set 객체
 * @property {Boolean} visited 노드 체크 여부
 * @method link 연결된 노드를 등록한다.
 * @method getLinked 연결된 노드들 재귀적으로 순회하며 배열에 담는다.
 */
class Node {
  constructor(nodeNum) {
    this.num = nodeNum;
    this.linkedSet = new Set();
    this.visited = false;
  }

  link(linkNode) {
    this.linkedSet.add(linkNode);
  }

  getLinked(arr) {
    this.visited = true;
    arr.push(this);

    for (const linkNode of this.linkedSet.values()) {
      // 이미 체크한적 있는 노드는 방문하지 않는다.(순환 참조 문제)
      if (!linkNode.visited) linkNode.getLinked(arr);
    }
  }
}

/**
 * @description 노드를 연결하고 연결된 노드끼리 모아 집합끼리 노드수의 차를 구한다.
 * @param {Number} nodeCount
 * @param {Array} wires
 * @returns {Number} 두 전령망에 속한 노드 수의 차
 */
const getDivideArray = (nodeCount, wires) => {
  const arr = Array(nodeCount + 1).fill(-1);
  const nodeList = arr.map((_, idx) => new Node(idx));

  // 노드 연결
  for (let i = 0; i < wires.length; i++) {
    const [s, e] = wires[i];

    const startNode = nodeList[s];
    const endNode = nodeList[e];
    startNode.link(endNode);
    endNode.link(startNode);
  }

  const a = [];

  // 노드를 순회하며 연결된 노드끼리 배열에 넣는다.
  for (let i = 1; i < nodeList.length; i++) {
    const targetNode = nodeList[i];

    // 방문하지 않은 노드가 있다면 새로운 배열을 만들어 노드를 수집한다.
    if (!targetNode.visited) {
      const newArr = [];
      targetNode.getLinked(newArr);
      a.push(newArr);
    }
  }

  const sortArr = a.sort((a, b) => a.length - b.length);
  return sortArr[1].length - sortArr[0].length;
};

/**
 * main함수
 * wires배열에서 아이템을 하나씩 제거한 케이스로 만들고(노드 연결 끊기)
 * 케이스별로 노드 개수의 차이를 구한다. (getDeivdeArray)
 * 제일 작은 차를 구하여 반환한다.
 */
function solution(nodeCount, wires) {
  const answers = [];
  // wires 순회하며 하나씩 제거한후에 검사
  for (let i = 0; i < wires.length; i++) {
    const copyWire = JSON.parse(JSON.stringify(wires));
    copyWire.splice(i, 1);

    const testResult = getDivideArray(nodeCount, copyWire);
    answers.push(testResult);
  }

  return Math.min(...answers);
}
const res1 = solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]); // 3
console.log("res1 : ", res1);
