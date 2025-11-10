## 주제: DP(동적프로그래밍 기초)

### 1. N으로 표현 (LV3)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42895

### 2. 정수 삼각형 (LV3)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43105

### 3. 등굣길 (LV3)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42898

### 4. 도둑질 (LV4)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42897

---

## 참고 자료

N/A

---

## 스터디 정보

- **날짜**: 2025.09.16 (화)
- **시간**: 오후 10:00 ~ 11:00
- **장소**: 온라인(디스코드)

<img width="2862" height="1676" alt="image" src="https://github.com/user-attachments/assets/72144c23-1c31-4645-8d23-723f85041bae" />


---

## 발표자

- 개념설명 : 김권수
- N으로 표현 (LV3) : 양태욱
- 정수 삼각형(LV3) : 백승훈
- 등굣길 (LV3) : 윤도운
- 도둑질 (LV4) : 박희연

---

## 스터디 내용

1. 동일한 N을 이어붙인 수(5, 55, 555 등)를 포함해, 1~8회까지 각 횟수별로 만들 수 있는 수 집합을 동적 프로그래밍으로 누적하며 사칙연산으로 조합해 number가 나올 때의 최소 사용 횟수를 찾는다.
2. 아래 행부터 위로 올라오며, 각 위치에서 선택 가능한 두 경로 중 더 큰 값을 더해가는 **하향식 DP(동적 프로그래밍)**으로 최댓값 경로 합을 계산한다.
3. 2차원 DP 테이블을 만들어, 왼쪽과 위쪽에서 오는 경로 수를 더해가며 물에 잠긴 칸은 0으로 처리하고, 마지막 칸의 값을 1,000,000,007로 나눈 나머지로 반환한다.
4. 첫 집을 털 경우 마지막 집은 제외하고, 첫 집을 털지 않을 경우 마지막 집을 포함해 두 경우로 나누어 각각 일반 DP로 최대 금액을 구한 뒤 더 큰 값을 선택한다.

---

## 다음 주 계획

📌 7주차: 그래프 이론 심화 (최단거리, 위상정렬)

1. 가장 먼 노드 (LV3) https://school.programmers.co.kr/learn/courses/30/lessons/49189

2. 순위 (LV3) https://school.programmers.co.kr/learn/courses/30/lessons/49191

3. 배달 (LV4) https://school.programmers.co.kr/learn/courses/30/lessons/12978

