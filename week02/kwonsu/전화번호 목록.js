// 1. 사고
// Hash ( Key = 전화번호, Value = 상관없음 )
//   a. 모든 전화번호를 Key로 등록한 Map 생성
//   b. phone_book 배열을 순회하면서 각 전화번호를 한 글자씩 늘려가며 Map에 키로 존재하는지 확인
//   c. 존재한다면 false 반환, 하나도 없으면 true 반환

// 2. 구현
function solution(phone_book){

    // a. 모든 전화번호를  Map에 키로 저장
    const numbers = new Map();
    for (const phone of phone_book) {
        numbers.set(phone, 1);
    }

    // b. 모든 전화번호를 순회
    for (const phone of phone_book) {
        // c. 각 전화번호를 한 글자씩 늘려가며 접두어 생성
        for(let i = 1; i< phone.length; i++){
            // d. 해당 접두어가 Map 존재하는지 확인
            const prefix = phone.substring(0, i);
            if(numbers.has(prefix)){
                return false; // 접두어 존재 -> false 반환
            }
        }
    }

    return true; // 접두어 없음 -> true 반환
}

// 3. 학습 내용 정리
// - 이 문제에서 응용한 것
// Map 객체의 has() 메서드 : key의 존재 여부에 따라 true, false 반환