function solution(word) {
    let count = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;

    function search(currentWord, depth = 0) {
        // 들여쓰기로 재귀 깊이 표현
        const indent = '  '.repeat(depth);
        console.log(`${indent}🔍 search("${currentWord}") 시작 - 현재 깊이: ${depth}`);
        
        if (answer > 0) {
            console.log(`${indent}⏹️  이미 답을 찾았으므로 종료`);
            return;
        }
        
        if (currentWord.length === 5) {
            console.log(`${indent}⏹️  최대 길이(5) 도달, 종료`);
            return;
        }

        console.log(`${indent}🔄 for문 시작 - A,E,I,O,U 순서로 탐색`);
        
        for (let i = 0; i < vowels.length; i++) {
            if (answer > 0) {
                console.log(`${indent}⏹️  답을 찾았으므로 for문 종료`);
                return;
            }

            const newWord = currentWord + vowels[i];
            count++;
            
            console.log(`${indent}📝 ${count}번째: "${newWord}" 생성 (현재단어:"${currentWord}" + "${vowels[i]}")`);
            
            if (newWord === word) {
                answer = count;
                console.log(`${indent}🎯 목표 단어 "${word}" 찾음! ${count}번째가 정답!`);
                return;
            }

            console.log(`${indent}⬇️  "${newWord}"로 재귀 호출 시작`);
            search(newWord, depth + 1);
            console.log(`${indent}⬆️  "${newWord}" 재귀 호출 완료`);
        }
        
        console.log(`${indent}✅ search("${currentWord}") 완료`);
    }

    console.log(`🚀 "${word}" 찾기 시작!`);
    console.log(`📚 사전 순서: A→E→I→O→U`);
    console.log(`==========================================`);
    
    search('');
    
    console.log(`==========================================`);
    console.log(`🏁 결과: "${word}"은 사전에서 ${answer}번째 단어입니다!`);
    return answer;
}

console.log(solution('AAAE'));
