function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];

    const p1 = person1[i % person1.length];
    const p2 = person2[i % person2.length];
    const p3 = person3[i % person3.length];

    if (p1 === answer) scores[0] = (scores[0] || 0) + 1;
    if (p2 === answer) scores[1] = (scores[1] || 0) + 1;
    if (p3 === answer) scores[2] = (scores[2] || 0) + 1;
  }

  const maxScore = Math.max(...scores);

  const result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}
