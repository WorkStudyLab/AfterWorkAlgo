function solution(n, results) {
  // 1. 그래프 초기화 (false: 모르는 관계)
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  // 2. 주어진 경기 결과 반영 (A가 B를 이김)
  for (const [a, b] of results) {
    graph[a][b] = true;
  }

  // 3. 플루이드-워셜: i → k, k → j 이면 i → j
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = true;
        }
      }
    }
  }

  // 4. 각 선수별로 순위 확정 가능한지 체크
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (graph[i][j] || graph[j][i]) count++; // i가 j와의 관계를 확실히 알면 그러니까 둘다 누가 지는지 알고있다는 뜻
    }
    if (count === n - 1) answer++; // 모든 선수와의 관계가 확실하면 순위 확정
  }

  return answer;
}

// graph[a][b] = true는 a가 b를 이길 수 있음

// 플루이드-워셜로 경유 노드를 통해 이길 수 있는 관계를 전부 채운다

// 각 선수에 대해 n-1명과의 관계가 다 확실하면 → 순위 확정
// 선수 i가 다른 모든 선수 j(= n-1명)와의 관계를 전부 알면, 문제를 풀 수 있지만 이걸 어떻게 생각해내느냐.......