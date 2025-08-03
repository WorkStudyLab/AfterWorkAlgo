function solution(progresses, speeds) {
  var answer = [];
  let count = 0;
  while (progresses.length >= 0) {
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) {
      answer.push(count);
      count = 0;
      if (progresses.length === 0) {
        break;
      }
    }

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }

  return answer;
}
