function solution(arr) {
  var temp = -1;
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp !== arr[i]) {
      answer.push(arr[i]);
      temp = arr[i];
    }
  }

  return answer;
}
