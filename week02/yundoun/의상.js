function solution(clothes) {
    let hash = new Map();
    let answer = 1 ;
    
    // 배열을 아래 형태로 바꿔서 해시맵 만들어주기
    // {
    //     headgear : 2,
    //     eyewear : 1
    // }
    for (let [name, type] of clothes){
        hash.set(type, (hash.get(type)||0) + 1)
    }
    
    // 조합의 경우는 각 종류의 값에서
    // 입는 경우, 안입는 경우 즉, value에 1을 더해서 서로 종류를 곱하면됨
    // 단 모두 안입는 경우가 있으므로 마지막에 -1 해주면 끝
    for (let [key, value] of hash){
        answer = answer * (value+1)
    }
    
    return answer-1;
}



