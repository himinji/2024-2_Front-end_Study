## [Counter App](https://visionary-kheer-72c19f.netlify.app)

## class vs id
**class**
* HTML에서 class는 여러 요소에 적용될 수 있는 스타일이나 동작을 정의할 때 사용
  * 여러 요소들이 같은 class를 가질 수 있음
  * 여러 요소에 동일한 스타일 또는 스크립트를 적용하고 싶을 때 사용
* CSS에서 **.**(점)으로 시작하며, 예를 들어 `.my-class`는 my-class라는 클래스를 가진 모든 요소를 선택
* CSS에서 id보다 우선 순위가 낮음

**id**
* HTML에서 id는 요소를 고유하게 식별하기 위해 사용
  * 각 id는 문서 내에서 오직 하나의 요소에만 적용할 수 있음
  * 특정한 하나의 요소를 고유하게 식별하고, CSS나 JavaScript에서 해당 요소를 다룰 때 사용
* CSS에서 **#**(샵)으로 시작하며, 예를 들어 `#my-id`는 my-id라는 id를 가진 하나의 요소만 선택
* CSS에서 class보다 우선 순위가 높음

# JavaScript
 - JavaScript는 HTML과 CSS와 함께 웹 개발에서 가장 중요한 프로그래밍 언어 중 하나이다.
 - JavaScript는 동적인 웹 페이지를 만들기 위해 사용된다.
 - 웹 페이지 내에서 사용자의 상호작용(클릭, 입력 등)에 반응하고, 페이지 내용을 동적으로 변경하거나 처리할 수 있다.

## id가 아닌 class로 JS 조작하는 방법
* **id**: HTML에서 고유한 요소를 식별하는데 사용되며, 한 페이지에서 단 하나의 요소에만 적용할 수 있음
  * JavaScript에서 **getElementById()**로 사용
* **class**: 여러 요소에 적용할 수 있는 공통 스타일이나 동작을 정의하며, 동일한 클래스를 가진 여러 요소를 선택할 수 있음
  * JavaScript에서 **getElementsByClassName()**로 사용
* 코드 예시
```javascript
  // class로 버튼과 카운트 요소 선택
const number = document.getElementsByClassName("counting-num")[0];  // 첫 번째 요소 선택
const incButton = document.getElementsByClassName("increase")[0];

// 카운트 업데이트 함수
let count = 0;
function increaseCount() {
    count++;
    number.textContent = count;  // 카운트 값 업데이트
}

// 버튼 클릭 시 카운트 증가
incButton.addEventListener("click", increaseCount);
```