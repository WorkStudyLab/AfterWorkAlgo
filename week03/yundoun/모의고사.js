function solution(answers) {
    // 수포자의 점수를 저장할 변수
    let scores = [0, 0, 0];

    let mathLosers = [[1,2,3,4,5,], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    
    for (let i =0; i < scores.length; i++){
        for (let j= 0; j < answers.length; j++ ){
        if (answers[j] === mathLosers[i][ j % mathLosers[i].length]   ){
            scores[i]++;
        }
        }
    }
        
    // 최대값 구하기
    let maxScore = Math.max(...scores)
    let winner = scores.map((score, idx) => score === maxScore ? idx + 1 : null).filter(v => v != null)
    
    return winner;
}