// 컴퓨터는 양방향이니까 하나만 검색하면 됨
// 예를 들어 1번과 2번이 연결되어있으면 [1][2] = 1일 때 [2][1] 은 순회하지 않아도 됨
// 그래서 visited 배열에 부울값으로 관리

function solution(n, computers) {
    let visited = Array(n).fill(false);
    let que = [];
    let answer = 0;
    
    for (let i=0; i<visited.length; i++){
        // 방문 안한 컴퓨터일때만 하나씩 computers 배열에서 꺼내 순회함
        if (visited[i] === false){
            // i번째 지금 순회하니까 큐에 넣기
            que.push(i)
            // 방문 처리도 같이
            visited[i] = true
            while(que.length > 0){
                // 큐에서 꺼낸값은 현재 탐색중인 컴퓨터 번호
                let x = que.shift()
                for (let j =0; j<computers[x].length; j++){
                    if (computers[x][j] === 1 && !visited[j]){
                        // 이제 방문했으니까 방문 처리
                        visited[j] = true;
                        // 방문할 컴퓨터 번호만 큐에 넣는다.
                        que.push(j);
                    }
                }
            }
            // 연결된 컴퓨터 한 쌍 찾았으니까 카운트
            answer++
        }
    }
    
    
    
    
    
    return answer;
}