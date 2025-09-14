function solution(N, number) {
    var answer = 0;
    
    let dp = [];
    for (let i =0; i<9; i++){
        dp[i] = new Set();
    }
    
    for(let i = 0; i<9; i++){
        // 이어붙인 숫자 추가 (예: N=5, i=3 → 555)
        dp[i].add(Number(String(N).repeat(i)));
        
        // 이전 dp 값과 조합해서 사칙연산
        for (let j = 1; j < i; j++) {
            for (let x of dp[j]) {
                for (let y of dp[i - j]) {
                    dp[i].add(x + y);
                    dp[i].add(x - y);
                    dp[i].add(x * y);
                    if (y !== 0) dp[i].add(Math.floor(x / y));
                }
            }
        }

        
        // number가 나오면 최소 횟수 반환
        if (dp[i].has(number)) return i;
    }
    
    return -1;
}