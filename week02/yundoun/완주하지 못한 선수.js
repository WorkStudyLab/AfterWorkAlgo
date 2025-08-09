function solution(participant, completion) {
    var hashmap = new Map();
    
    // 참가자 몇 번 나오는지 카운트
    for (let name of participant){
        hashmap.set(name, (hashmap.get(name) || 0) + 1)
    }
    
    // 완주자 카운트 감소
    for (let name of completion){
        hashmap.set(name, hashmap.get(name) - 1)
    }
    
    for (let [k, v] of hashmap){
        if(v>0) return k;
    }
}