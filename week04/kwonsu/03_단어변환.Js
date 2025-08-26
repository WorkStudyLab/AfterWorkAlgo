const Queue = require("./Queue");

console.log("hot".includes("ot"));

// 두 단어가 한 글자만 다른지 확인하는 헬퍼 함수
function isOneLetterDifferent(wordA, wordB) {
  let diffCount = 0;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) {
      diffCount++;
    }
  }
  return diffCount === 1;
}

function solution(begin, target, words) {
  // 타겟이 words 안에 없으면 0 반환
  if (!words.includes(target)) return 0;

  // BFS 탐색 함수
  function bfs(startNode) {
    // 큐와 방문 기록을 초기화
    const queue = new Queue();
    const visited = new Set();

    // 시작 노드를 큐에 추가하고 방문 처리 [노드, 단계 수]
    queue.enqueue([startNode, 0]);
    visited.add(startNode);

    // BFS 탐색 시작
    while (!queue.isEmpty()) {
      // 큐에서 현재 노드와 단계 수를 꺼냄
      const [currentWord, steps] = queue.dequeue();

      // 현재 단어가 타겟과 같으면 단계 수 반환
      if (currentWord === target) {
        return steps;
      }

      // 현재 단어에서 한 글자만 다른 모든 단어를 찾아 큐에 추가
      for (const word of words) {
        // 아직 방문하지 않았고 한 글자만 다른 단어인 경우 큐에 추가하고 단계 수 증가
        if (!visited.has(word) && isOneLetterDifferent(currentWord, word)) {
          visited.add(word);
          queue.enqueue([word, steps + 1]);
        }
      }
    }
    // 타겟에 도달하지 못한 경우 0 반환
    return 0;
  }

  // BFS 탐색 시작
  return bfs(begin);
}

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

solution(begin, target, words);
