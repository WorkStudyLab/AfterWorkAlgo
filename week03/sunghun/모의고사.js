function solution(answers) {
  let answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let people = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (p1[i % 5] === answers[i]) {
      people[0] += 1;
    }
    if (p2[i % 8] === answers[i]) {
      people[1] += 1;
    }
    if (p3[i % 10] === answers[i]) {
      people[2] += 1;
    }
  }

  let max = Math.max(...people);

  if (max === people[0]) {
    answer.push(1);
  }

  if (max === people[1]) {
    answer.push(2);
  }

  if (max === people[2]) {
    answer.push(3);
  }

  return answer;
}
