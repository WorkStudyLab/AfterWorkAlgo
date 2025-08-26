const Queue = require("./Queue");

function solution(maps) {
  // [0,0] -> [1,0], [0,1], [-1,0], [0,-1]
  // goal_x : 목표 x 좌표
  // goal_y : 목표 y 좌표
  const goal_x = maps.length - 1;
  const goal_y = maps[0].length - 1;

  // BFS 탐색 함수
  function bfs(startNode) {
    // 큐와 방문 기록을 초기화
    const queue = new Queue();
    queue.enqueue(startNode);
    const visited = new Set();
    visited.add("0,0");

    // BFS 탐색 시작
    while (!queue.isEmpty()) {
      // 큐에서 현재 노드와 단계 수를 꺼냄
      const [x, y, distance] = queue.dequeue();

      // 현재 노드가 목표 노드라면 거리 반환
      if (x === goal_x && y === goal_y) {
        return distance;
      }

      // 현재 노드에서 이동할 수 있는 모든 이웃 노드
      const neighbor = [
        [x + 1, y],
        [x, y + 1],
        [x - 1, y],
        [x, y - 1],
      ];

      // 각 이웃 노드를 검사
      for (const n of neighbor) {
        const n_x = n[0];
        const n_y = n[1];

        console.log(n);
        console.log(`${n_x} ${n_y}`);
        // 이웃 노드가 맵의 경계 내에 있고, 이동할 수 있는 칸(1)이며, 아직 방문하지 않은 경우
        if (n_x >= 0 && n_y >= 0 && n_x <= goal_x && n_y <= goal_y) {
          if (maps[n_x][n_y] === 1) {
            if (!visited.has(`${n_x},${n_y}`)) {
              // 큐에 이웃 노드와 거리 + 1을 추가하고 방문 처리
              console.log(`queue enqueued x : ${n_x}, y : ${n_y}`);
              queue.enqueue([n_x, n_y, distance + 1]);
              visited.add(`${n_x},${n_y}`);
            }
          }
        }
      }
    }

    // 목표 노드에 도달하지 못한 경우 0 반환
    return 0;
  }

  // BFS 탐색 시작
  return bfs([0, 0, 1]);
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]; // 11

console.log(solution(maps));
