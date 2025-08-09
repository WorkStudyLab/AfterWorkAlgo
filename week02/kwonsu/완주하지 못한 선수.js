// 1. 사고
// Hash ( Key = 선수 이름, Value = 해당 이름을 가진 선수의 수 )
//   a. participant 배열을 순회하면서 Key 값에 해당하는 선수가 나올 경우 Value +1
//   b. completion 배열을 순회하면서 Key 값에 해당하는 선수가 나올 경우 Value -1

// 2. 구현

function solution(participant, completion) {
    // 각 선수가 몇 명인지 기록하기 위한 해시맵
    const runnerCounts = new Map();

    // a. 참가자 명단을 기준으로 각 선수의 인원수를 센다.
    for (const p of participant) {
        // '|| 0' 를 통해 p 라는 이름이 처음 등록될 때 undefined 가 반환되는걸 방지
        runnerCounts.set(p, (runnerCounts.get(p) || 0) + 1);
    }

    // b. 완주자 명단을 기준으로 인원수를 1씩 뺀다.
    for (const c of completion) {
        runnerCounts.set(c, runnerCounts.get(c) - 1);
    }

    // c. 인원수가 0이 아닌, 즉 완주하지 못한 선수를 찾는다.
    for (const [name, count] of runnerCounts) {
        if (count > 0) {
            return name;
        }
    }
}

// 3. 학습 내용 정리
// - 해시(Hash)
// 임의의 길이 데이터를 고정된 길이의 고유한 값으로 변환하는 과정 또는 그 결과물
// 이 고유한 값을 해시 값(Hash Value) 또는 해시 코드(Hash Code)라고 부르고, 이 변환 과정을 수행하는 함수를 해시 함수(Hash Function)이라고 함.
// - 주요 특징
//   + 고정된 길이 : 입력 데이터 크기와 무관하게 결과 해시 값은 항상 정해진 길이를 가짐
//   + 고유성 : 입력 데이터가 달라지면, 결과 해시 값은 완전히 다른 값이 나옴.
//            서로 다른 데이터가 같은 해시 값을 가지는 경우를 해시 충돌이라고 하며, 좋은 해시 함수에서는 이럴 확률이 극히 낮다.
//   + 단뱡항성 : 해시 값을 가지고 입력 데이터를 알아내는 건 거의 불가능
//   + 결정성 : 같은 입력 데이터에 대해서는 항상 동일한 해시 값 출력
// - 이 문제에서 응용한 것
// '해시 맵' 을 이용한 낮은 비용의 검색 연산
