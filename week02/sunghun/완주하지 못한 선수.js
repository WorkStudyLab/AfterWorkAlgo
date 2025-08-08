function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0, n = participant.length; i < n; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
