
function solution(n, wires) {
    // 1. 인접 리스트로 그래프 구성
    const graph = Array.from({length: n + 1}, () => []);
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    console.log("초기 그래프:", graph);
    
    let minDiff = n; // 최소 차이값 저장 (최대값으로 초기화)
    
    // 2. 각 전선을 하나씩 끊어보며 최솟값 계산
    for (let i = 0; i < wires.length; i++) {
        const [a, b] = wires[i];
        console.log(`\n=== 전선 [${a}, ${b}] 제거 시도 ===`);
        
        // 3. 전선 [a,b] 임시 제거 (그래프에서 연결 끊기)
        graph[a] = graph[a].filter(node => node !== b);
        graph[b] = graph[b].filter(node => node !== a);
        
        console.log("전선 제거 후 그래프:", graph);
        
        // 4. DFS로 한쪽 그룹의 크기 계산 (노드 a에서 시작)
        const visited = Array(n + 1).fill(false);
        const group1Size = dfs(a, visited, graph);
        const group2Size = n - group1Size;
        
        console.log(`그룹1 크기: ${group1Size}, 그룹2 크기: ${group2Size}`);
        
        // 5. 두 그룹 크기 차이 계산
        const diff = Math.abs(group1Size - group2Size);
        console.log(`크기 차이: ${diff}`);
        
        // 6. 최솟값 갱신
        minDiff = Math.min(minDiff, diff);
        console.log(`현재 최소 차이: ${minDiff}`);
        
        // 7. 전선 다시 연결 (원상복구)
        graph[a].push(b);
        graph[b].push(a);
    }
    
    console.log(`\n최종 답: ${minDiff}`);
    return minDiff;
}

function dfs(node, visited, graph) {
    // 현재 노드 방문 처리
    visited[node] = true;
    let count = 1; // 현재 노드 카운트
    
    console.log(`  노드 ${node} 방문`);
    
    // 현재 노드와 연결된 모든 노드 탐색
    for (const next of graph[node]) {
        if (!visited[next]) {
            console.log(`    노드 ${node}에서 ${next}로 이동`);
            count += dfs(next, visited, graph);
        }
    }
    
    console.log(`  노드 ${node}에서 연결된 총 개수: ${count}`);
    return count;
}



const n = 9
const wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]];

solution(n,wires);

