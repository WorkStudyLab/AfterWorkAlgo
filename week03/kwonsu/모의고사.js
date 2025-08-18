function solution(answers) {

    // 1. 모든 참가자의 답변 사이클을 배열로 선언
    const a_s = [1, 2, 3, 4, 5];
    const b_s = [2, 1, 2, 3, 2, 4, 2, 5];
    const c_s = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 2. 참가자 별 정답 개수를 저장할 맵 선언
    const p = new Map();

    // 3. 모든 문제를 순회하면서 참가자 별 정답 개수 체크
    for (let i = 0; i < answers.length; i++) {

        // 3-1. (index % 정답 사이클의 길이) 를 통해 정답 사이클의 길이 만큼 인덱스가 반복되게 함
        if (answers[i] === a_s[i % a_s.length]) {
            p.set(1, (p.get(1) || 0) + 1);
        }
        if (answers[i] === b_s[i % b_s.length]) {
            p.set(2, (p.get(2) || 0) + 1);
        }
        if (answers[i] === c_s[i % c_s.length]) {
            p.set(3, (p.get(3) || 0) + 1);
        }
    }

    // 4. 정답 수를 counts 배열에 넣고, Math.max 로 가장 많이 맞힌 사람의 정답 수를 찾음
    const counts = [...p.values()];
    const max_count = Math.max(...counts);

    const answer = [];

    // 5. Map을 순회하면서 Max 정답 수와 같은 value 를 가진 key를 answer 에 삽입
    for (const [key, value] of p.entries()) {
        if (value === max_count) {
            answer.push(key);
        }
    }

    // 6. 오름차순 정렬해서 반환
    return answer.sort();
}

console.log(solution([1, 3, 2, 4, 2]));