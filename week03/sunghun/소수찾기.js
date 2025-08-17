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
  
  // 모든 길이(1~n)로 만들 수 있는 정수 집합 만들기
  function buildAllNumbers(numbers) {
    const digits = numbers.split('');
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
  
    dfs('');
    return [...uniq].sort((a, b) => a - b);
  }
  
  function solution(numbers) {
    const all = buildAllNumbers(numbers); // 모든 후보 정수
    let count = 0;
    for (const v of all) if (isPrime(v)) count++;
    return count;
  }