// 1. 사고
// Hash( Key = 옷의 종류, Value = 개수 )
//   a. clothes 배열을 순회하면서 모든 <옷의 종류, 개수> Map 을 생성
//   b. 각 Key 별 개수에 1을 더하고(옷을 입지 않는 경우 계산), 개수를 모두 곱한다.
//   c. 결과값에서 1을 뺀다. (하나도 입지 않는 경우는 제외)


// 2. 구현
function solution(clothes) {
    let answer = 1;

    // a. 종류별 의상 개수를 Map에 저장
    const clothesMap = new Map();
    for (const [name, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }

    // b. 각 종류별 (개수 + 1)을 모두 곱하기
    for (const count of clothesMap.values()) {
        answer = answer * (count+1);
    }

    // c. 아무것도 입지 않은 경우를 빼고 반환
    return answer -1;
}