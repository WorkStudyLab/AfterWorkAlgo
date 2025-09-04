## 주제: 그리디 / 이진탐색 / 힙 응용

### 1. 체육복 (LV1)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42862

### 2. 구명보트 (LV2)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42885

### 3. 더 맵게 (LV2)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42626

### 4. 입국심사 (LV3)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43238

---

## 참고 자료

- 최소 힙 구현 문제(백준) : https://www.acmicpc.net/problem/1927

---

## 스터디 정보

- **날짜**: 2025.09.04(목)
- **시간**: 오후 10:00 ~ 11:10
- **장소**: 온라인(디스코드)

<img width="2872" height="1684" alt="image" src="https://github.com/user-attachments/assets/e75cfffa-7b3e-4c50-b672-03a5a84457a8" />


---

## 발표자

- 개념설명 : 박희연
- 체육복(LV1) : 윤도운
- 구명보트(LV2) : 양태욱
- 더 맵게(LV2) : 김권수
- 입국심사 (LV3) : 백승훈

---

## 스터디 내용

1. 도난과 여벌을 동시에 가진 학생을 먼저 처리한 뒤, 남은 여벌을 앞→뒤 순으로 빌려주어 최대로 수업 참여할 학생 수를 구한다.
2. 사람들을 정렬한 뒤, 가장 무거운 사람과 가장 가벼운 사람을 짝지어 limit 이하이면 같이 태우고, 아니면 무거운 사람만 태워 양쪽 포인터를 좁혀가며 보트 수를 센다.
3. 우선순위 큐(최소 힙)로 가장 작은 두 음식의 스코빌 지수를 꺼내 섞고 다시 넣는 과정을 반복하며, 모든 값이 K 이상이 될 때까지 섞은 횟수를 센다.
4. 이분 탐색으로 가능한 최소 시간을 찾고, 각 시간마다 심사관들이 처리 가능한 인원 합으로 n명을 충족하는지 검사한다.

---

## 다음 주 계획

📌 6주차: DP (동적 프로그래밍 기초)

1. N으로 표현
https://school.programmers.co.kr/learn/courses/30/lessons/42895

2. 정수 삼각형
https://school.programmers.co.kr/learn/courses/30/lessons/43105

3. 등굣길
https://school.programmers.co.kr/learn/courses/30/lessons/42898

4. 도둑질
https://school.programmers.co.kr/learn/courses/30/lessons/42897
