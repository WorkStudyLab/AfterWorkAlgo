function solution(participant, completion) {
  const participantMap = new Map();

  participant.forEach((name) => {
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  });

  completion.forEach((name) => {
    participantMap.set(name, participantMap.get(name) - 1);
  });

  for (let [name, count] of participantMap) {
    if (count > 0) return name;
  }
}
