
// 배열을 split()하면 ["0", "1", "1"]
// 하나씩 넣기 0, 1, 1
// 0번 인덱스부터 선택해서 나머지 붙이기
// 01, 01
// 10, 11
// 10, 11
// 101, 110
// 그럼 나올 수 있는건 0, 1, 10, 11, 101, 110 여기서 소수는 11, 101
// 즉, 하나씩 골라서 남은 배열을 순열 할 수있게 만들어야함 -> 재귀함수로 남은거 모두 순열 처리

// 소수 판별하는 함수, sqrt는 제곱근
function isPrime(n){
    if (n<2) return false;
    for (let i = 2; i<=Math.sqrt(n); i ++){
        if (n % i === 0) return false;
    }
    return true;
}


function solution(numbers) {
  const nums = numbers.split(""); // ["0","1","1"] 처럼 문자 배열로 변환
  const set = new Set(); // 중복 제거용
    
  // 재귀 함수: 남은 배열(arr)을 받아 순열 생성
  function getPermutations(arr, prefix = "") {
  if (prefix !== "") {
    set.add(Number(prefix)); // 현재까지 만든 숫자를 set에 추가
  }

    arr.forEach((num, idx) => {
      // 선택한 원소를 제외한 나머지
      const rest = arr.filter((_, i) => i !== idx);
      // 선택한 원소를 prefix 앞에 붙이고 재귀 호출
      getPermutations(rest, prefix + num);
    });
  }

  getPermutations(nums); // 재귀 시작

  const answer = [];
  for (let num of set ){
      if (isPrime(num)) answer.push(num)
  }

  return answer.length;
}


