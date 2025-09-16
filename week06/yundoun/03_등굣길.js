// 이 문제는 bfs로 풀려고 했으니 오른쪽과 아래쪽으로만 움직일 수 있어서
// 사실상 모든 경로가 길이가 같음 그래서 최단 경로가 총 몇개인지 경로의 수를 세어야 함

// m x n 크기의 2차원 배열(격자)에서
// 집에서 출발할떄는 1로 시작
// 물웅덩이는 밟을 수 없으니까 경로를 0으로 넣을 수 있다.
// 0 제외하고 나머지칸들은 왼쪽칸의 경로 + 위쪽 칸의 경로로 채워간다.

function solution(m, n, puddles) {
    var answer = 0;
    let array = [];
    const MOD = 1000000007; // 1,000,000,007로 나눈 나머지
    
    // 2차원 배열 0으로 채워 넣기
    for (let i = 0; i < n; i++) {
        array.push(new Array(m).fill(0)); // 각 행을 m개의 0으로 채움
    }
    
    // 시작점
    array[0][0] = 1;
    
    // puddles 배열 반복하면서, 물 웅덩이 좌표를 array에 -1으로 표시
    for (let i=0; i<puddles.length; i++){
        let x = puddles[i][0] - 1 // 열
        let y = puddles[i][1] - 1 // 행
        
        array[y][x] = -1
    }
    
    // 격자 채워나가기
    // array[i][j] = 현재 칸
    // array[i-1][j] = 위쪽 칸    
    // array[i][j-1] = 왼쪽 칸
  
    // (i, j) 칸의 경로 = (위쪽 칸 경로) + (왼쪽 칸 경로)
    for (let i = 0; i < n; i++) { // 행 인덱스 (0부터 n-1까지)
        for (let j = 0; j < m; j++) { // 열 인덱스 (0부터 m-1까지)
            // 1. 현재 칸이 물웅덩이라면 (값이 -1이면)
            if (array[i][j] === -1) {
                continue; 
            }
            // 2. 현재 칸이 시작점(0,0)이라면 (이미 1로 설정했으)
            if (i === 0 && j === 0) {
                continue;
            }

            let fromUp = 0; // 위쪽 칸에서 오는 경로 수
            let fromLeft = 0; // 왼쪽 칸에서 오는 경로 수

            // 위쪽 칸 (i-1, j)에서 오는 경로 계산
            // i > 0 이면 위쪽 칸이 존재하 그 칸이 물웅덩이(-1)가 아니라면 값을 가져옴
            if (i > 0 && array[i - 1][j] !== -1) {
                fromUp = array[i - 1][j];
            }

            // 왼쪽 칸 (i, j-1)에서 오는 경로 계산
            // j > 0 이면 왼쪽 칸이 존재 그 칸이 물웅덩이(-1)가 아니라면 값을 가져옴
            if (j > 0 && array[i][j - 1] !== -1) {
                fromLeft = array[i][j - 1];
            }

            // 현재 칸의 경로 수는 (위쪽 + 왼쪽) 경로의 합
            array[i][j] = (fromUp + fromLeft) % MOD;
        }
    }

    return array[n - 1][m - 1];
}