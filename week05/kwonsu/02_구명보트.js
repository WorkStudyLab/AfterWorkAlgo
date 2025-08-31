// 아이디어
// 몸무게 배열을 정렬
// 가장 가벼운 사람과 가장 무거운 사람을 짝지어 태우기
// 가장 가벼운 사람과 가장 무거운 사람의 합이 limit보다 크면, 가장 무거운 사람만 태우기
// 가장 가벼운 사람과 가장 무거운 사람의 합이 limit보다 작거나 같으면, 두 사람을 태우기
// 태울 때 태운 사람 수 만큼 count 증가, 태운 횟수 만큼 boat 증가
// count 가 전체 사람 수와 같아질 때까지 반복
// 태운 사람은 배열에서 제거
// 최종적으로 boat 리턴

function solution(people, limit) {
  let boat = 0;
  let count = 0;
  let peopleLen = people.length;

  // 몸무게 배열 정렬
  people.sort((a, b) => a - b);

  while (count < peopleLen) {
    console.log(people);
    console.log(count);

    const light = people[0];
    const heavy = people[people.length - 1];

    // 가장 가벼운 사람과 가장 무거운 사람의 합이 limit보다 크면, 가장 무거운 사람만 태우기
    if (light + heavy > limit) {
      people.pop();
      count += 1;
      boat += 1;
    } else {
      // 가장 가벼운 사람과 가장 무거운 사람의 합이 limit보다 작거나 같으면, 두 사람을 태우기
      people.shift();
      people.pop();
      count += 2;
      boat += 1;
    }
  }

  return boat;
}

console.log(solution([70, 50, 80, 50], 100));
