// 소수 판정: 2 이상, √n 까지만 나눠보기
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}

// 모든 길이(1~n)로 만들 수 있는 정수 집합 만들기 => DFS
function buildAllNumbersDFS(numbers) {
  const digits = numbers.split("");
  const used = new Array(digits.length).fill(false);
  const uniq = new Set(); // 중복 제거

  function dfs(currentStr) {
    if (currentStr.length > 0) {
      uniq.add(parseInt(currentStr, 10)); // 선행 0 제거 효과
    }
    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      const ch = digits[i];
      used[i] = true;
      dfs(currentStr + ch);
      used[i] = false;
    }
  }
  dfs("");
  return [...uniq];
}

// 모든 길이(1~n)로 만들 수 있는 정수 집합 만들기 => BFS
function buildAllNumbersBFS(numbers) {
  const digits = numbers.split("");
  const uniq = new Set();

  // 초기 상태: 빈 문자열 + 사용 여부 배열
  const initUsed = new Array(digits.length).fill(false);
  const queue = [["", initUsed]];

  while (queue.length > 0) {
    const [curStr, used] = queue.shift();

    if (curStr.length > 0) {
      uniq.add(parseInt(curStr, 10));
    }

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue; // 이미 쓴 숫자는 건너뜀
      const newUsed = used.slice(); // 상태 복사
      newUsed[i] = true;
      queue.push([curStr + digits[i], newUsed]);
    }
  }

  return [...uniq];
}

// 모든 길이(1~n)로 만들 수 있는 정수 집합 만들기 => BFS2
function buildAllNumbersBFS2(numbers) {
  const digits = numbers.split("");
  const uniq = new Set();
  const queue = [""]; // 시작은 빈 문자열

  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur.length > 0) uniq.add(parseInt(cur, 10));

    for (let i = 0; i < digits.length; i++) {
      //지금까지 쓴 숫자의 개수
      const curCount = cur.split("").filter((ch) => ch === digits[i]).length;
      //원래 주어진 숫자의 개수
      const totalCount = digits.filter((ch) => ch === digits[i]).length;
      if (curCount >= totalCount) {
        continue; // 동일 숫자 중복 방지
      }
      queue.push(cur + digits[i]);
    }
  }
  return [...uniq];
}

function solution(numbers) {
  const all = buildAllNumbersDFS(numbers); // 모든 후보 정수
  let count = 0;
  for (const v of all) if (isPrime(v)) count++;
  return count;
}
