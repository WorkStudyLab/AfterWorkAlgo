// 미로의 경우 분기점마다 끝까지 들어갔다가 되돌아오는 dfs보다는
// 모든 경우의 수를 탐색하다가 출구가 나오는 bfs가 효과적
// 방문한 배열을 따로 만들어서 기록하면서 출구를 찾는다.

function solution(maps) {
    // x좌표, y좌표, 이동거리
    // 시작지점은 지나간걸로 쳐서 1 더하라는데
    let que = [[0,0,1]]
    
    let n = maps.length; // 행개수
    let m = maps[0].length; // 열객수
    
    // 방문 기록용 배열
    let visited = Array(n).fill().map(() => Array(m).fill(false))
    
    // 출발 지점
    visited[0][0] = true
    
    // 내가 방문 할 수 있는 경우의 수
    // 수학에서 xy 좌표 말고 행과 열의 기준으로 생각해야함
    let dx = [-1, 1, 0, 0] // 행이 -1이므로 위쪽 이동, +1은 아래쪽 이동
    let dy = [0, 0, -1, 1] // 열이 -1 이므로 왼쪽 이동, +1은 오른쪽 이동
    
    while(que.length > 0){
        let [x, y, dist ] = que.shift();
        
        // 우선 큐에서 값을 뺄껀데 이게 출구인지 먼저 검토
        // 배열인덱스는 0부터 시작하니까 1빼주기
        if ( x === n-1 && y === m-1 ) return dist
        
        // 출구 아니면 탐색해야지
        // 상하좌우 반복
        for (let i =0; i<4; i++){
            
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            // 이동가능 조건 생각
            // 1. 지도에서 벗어나지 않았는가? (인덱스 기준)
            // 0 <= nx <n, 0 <= ny <m
            // 2. 길인가?
            // map[nx][ny] === 1
            // 3. 방문한적이 없는 길인가?
            // visited[nx][ny] === false
            if ((0<=nx && nx <n && 0<=ny && ny <m) && (maps[nx][ny] ===1) && visited[nx][ny] === false ){
                visited[nx][ny] = true;
                que.push([nx, ny, dist + 1])
            }
        }
        
        
        
    }
    
    // 탈출몬하면 -1 뱉음
    return -1;
}