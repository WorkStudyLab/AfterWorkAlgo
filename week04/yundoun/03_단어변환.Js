// bfs로 풀었을때 최소 카운트가 나오는게 더 효율적이라 생각함

// 두 개의 단어가 1글자만 다른지 비교하는 함수
// 함수내용 : 한 글자만 다르나요? 네 -> true, 아니오 -> false
function notSameOneStr(str1, str2){
    let count = 0;
    for (let i=0; i< str1.length; i++){
        if (str1[i] !== str2[i]) count++
    }
    return (count >= 2) ? false : true
}


function solution(begin, target, words) {
    // 큐에는 비교하는 단어와 횟수, 처음엔 begin을 비교해야하니 넣어따
    let que = [[begin, 0]];
    // 어떤 단어를 통해 알파벳을 바꿨을때, 그 알파벳이 나오는 경우가 또 있으므로
    // 굳이 또 순회할필요가 없기 때문에 중복 순회를 방지 ? 이해 x
    let visited = [];

    while (que.length > 0){
        // 큐에서 뽑은게 target이면 리턴
        let [str, step] = que.shift();
        if (str === target) return step;
        
        for ( let i = 0; i< words.length; i++){
            // 한 글자만 다르면
            if (!visited.includes(words[i]) && notSameOneStr(str, words[i])){
                que.push([words[i], step+1])   
                // 순회하는건 배열에 넣어주기
                // push하자 마자 방문처리해야 중복 안생긴다고함
                visited.push(words[i])
            }
        }
    }
    
    
    
    
    return (que.length !=0) ? que[0][1] : 0;
}