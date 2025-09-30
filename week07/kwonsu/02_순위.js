function solution(n, results) {
  console.log(`\n=== 순위 계산 시작 ===`);
  console.log(`참가자 수: ${n}명`);
  console.log(`경기 결과: ${JSON.stringify(results)}`);

  // 1. 자료구조 초기화
  console.log(`\n1단계: 자료구조 초기화`);
  const players = Array.from({ length: n + 1 }, () => ({
    wins: new Set(),
    loses: new Set(),
  }));
  console.log(`각 선수마다 wins, loses Set 생성 완료`);

  // 2. 직접 승패 관계 기록
  console.log(`\n2단계: 직접 승패 관계 기록`);
  results.forEach(([winner, loser]) => {
    players[winner].wins.add(loser);
    players[loser].loses.add(winner);
    console.log(`  선수 ${winner}이 선수 ${loser}를 이김`);
  });

  console.log(`\n직접 승패 관계 기록 후 상태:`);
  for (let i = 1; i <= n; i++) {
    console.log(`  선수 ${i}: 이긴 상대 [${Array.from(players[i].wins)}], 진 상대 [${Array.from(players[i].loses)}]`);
  }

  // 3. 간접 승패 관계 기록 (플로이드-워셜 알고리즘 원리)
  console.log(`\n3단계: 간접 승패 관계 추론 (플로이드-워셜)`);
  for (let B = 1; B <= n; B++) {
    console.log(`  중간다리 선수: ${B}`);
    // 중간다리 선수 B
    for (const A of players[B].loses) {
      // B를 이긴 선수 A
      for (const C of players[B].wins) {
        // B에게 진 선수 C
        // A > B 이고 B > C 이므로 A > C 이다.
        const wasNewWin = !players[A].wins.has(C);
        const wasNewLose = !players[C].loses.has(A);

        players[A].wins.add(C);
        players[C].loses.add(A);

        if (wasNewWin || wasNewLose) {
          console.log(`    추론: ${A} > ${B} > ${C} → ${A} > ${C}`);
        }
      }
    }
  }

  console.log(`\n모든 승패 관계 추론 후 최종 상태:`);
  for (let i = 1; i <= n; i++) {
    console.log(`  선수 ${i}: 이긴 상대 [${Array.from(players[i].wins)}], 진 상대 [${Array.from(players[i].loses)}]`);
    console.log(`    총 승패 관계: ${players[i].wins.size + players[i].loses.size}개 (전체 ${n-1}개와 비교)`);
  }

  // 4. 결과 집계
  console.log(`\n4단계: 순위 확정 가능한 선수 집계`);
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    const totalRelations = players[i].wins.size + players[i].loses.size;
    if (totalRelations === n - 1) {
      answer++;
      console.log(`  선수 ${i}: 순위 확정 가능! (${totalRelations}/${n-1})`);
    } else {
      console.log(`  선수 ${i}: 순위 확정 불가 (${totalRelations}/${n-1})`);
    }
  }

  console.log(`\n최종 결과: ${answer}명의 순위 확정 가능`);
  console.log(`=== 순위 계산 완료 ===\n`);

  return answer;
}

// 테스트 케이스 실행
console.log("===== 테스트 케이스 실행 =====");

// 테스트 케이스 1: 프로그래머스 예제
console.log("\n📋 테스트 케이스 1: 프로그래머스 예제");
const testCase1 = {
  n: 5,
  results: [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
};
console.log(`입력: n=${testCase1.n}, results=${JSON.stringify(testCase1.results)}`);
console.log(`예상 결과: 2명`);
const result1 = solution(testCase1.n, testCase1.results);
console.log(`실제 결과: ${result1}명`);
console.log(`✅ ${result1 === 2 ? "통과" : "실패"}`);

// 테스트 케이스 2: 간단한 경우 (모두 순위 확정)
console.log("\n📋 테스트 케이스 2: 완전한 순위");
const testCase2 = {
  n: 3,
  results: [[1, 2], [2, 3]]
};
console.log(`입력: n=${testCase2.n}, results=${JSON.stringify(testCase2.results)}`);
console.log(`예상 결과: 3명 (1위: 1번, 2위: 2번, 3위: 3번)`);
const result2 = solution(testCase2.n, testCase2.results);
console.log(`실제 결과: ${result2}명`);
console.log(`✅ ${result2 === 3 ? "통과" : "실패"}`);

// 테스트 케이스 3: 아무도 순위 확정 못하는 경우
console.log("\n📋 테스트 케이스 3: 순위 확정 불가");
const testCase3 = {
  n: 4,
  results: [[1, 2], [3, 4]]
};
console.log(`입력: n=${testCase3.n}, results=${JSON.stringify(testCase3.results)}`);
console.log(`예상 결과: 0명 (서로 독립적인 경기)`);
const result3 = solution(testCase3.n, testCase3.results);
console.log(`실제 결과: ${result3}명`);
console.log(`✅ ${result3 === 0 ? "통과" : "실패"}`);

// 테스트 케이스 4: 복잡한 간접 추론
console.log("\n📋 테스트 케이스 4: 복잡한 간접 추론");
const testCase4 = {
  n: 4,
  results: [[1, 2], [2, 3], [3, 4], [1, 4]]
};
console.log(`입력: n=${testCase4.n}, results=${JSON.stringify(testCase4.results)}`);
console.log(`예상 결과: 4명 (1>2>3>4 완전 순위)`);
const result4 = solution(testCase4.n, testCase4.results);
console.log(`실제 결과: ${result4}명`);
console.log(`✅ ${result4 === 4 ? "통과" : "실패"}`);
