## [Albums](https://graceful-choux-3f4a52.netlify.app/)
***
## API, Frontend, Backend
**API (Application Programming Interface)**
* 클라이언트와 서버 간의 데이터를 주고 받는 통로 역할
* 서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인터페이스

**프론트엔드 (Frontend)**
* Front + End (맨 앞)
* 사용자가 직접 상호작용하는 웹 페이지의 화면을 다루는 개발 영역

**백엔드 (Backend)**
* Back + End (맨 뒤)
* 서버에서 동작하는 부분을 다루는 개발 영역
* 비즈니스 로직 처리, 인증, 보안 등을 다룸

***
## fetch와 Promise
### fetch() 함수란?
* 자바스크립트에서 서버에 네트워크 요청을 보내고 그 응답을 받아오는 비동기 함수
* 기본적으로 Promise 기반으로 동작하며, then()과 catch()를 통해 응답 처리와 오류 처리가 가능
* 주로 REST API로부터 데이터를 받아오거나 서버로 데이터를 전송하는 데 사용

### Promise란?
* 자바스크립트에서 비동기 작업을 처리하기 위해 사용되는 객체
* 비동기 작업의 완료 또는 실패 상태를 추적하고, 그 결과에 따라 특정 동작을 실행할 수 있음
* 주로 API 호출, 파일 읽기, 타이머 등 시간이 걸리는 작업에 사용

**Promise의 상태**
* Pending(대기) : Promise가 아직 완료되지 않은 초기 상태
* Fulfilled (이행) : 비동기 작업이 성공적으로 완료된 상태 - `then()` 으로 결과를 처리
* Rejected (거부) : 비동기 작업이 실패한 상태 - `catch()` 로 오류를 처리

**주요 메서드**
* `then()` : Promise가 성공적으로 완료될 경우 호출되며, 결과를 인자로 받아 처리
* `catch()` : Promise가 실패할 경우 호출되며, 오류 메시지를 처리
* `finally()` : 작업의 성공 또는 실패와 관계없이 항상 마지막에 실행

### fetch()와 Promise 사용 예시
```javascript
fetch(url)
  .then(response => response.json())  // 응답을 JSON으로 변환
  .then(data => console.log(data))    // JSON 데이터를 사용
  .catch(error => console.error('Error:', error));  // 오류 처리
```
* Promise 반환 : `fetch()`가 반환한 Promise 객체는 서버 요청이 완료되면 `then()`으로 데이터를 처리하고, 요청이 실패할 경우 `catch()`로 에러를 처리한다.
* 비동기 작업 : `fetch()`는 비동기적으로 동작하여 서버로부터 데이터를 받아오는 동안 다른 코드가 계속 실행될 수 있다. 따라서 웹 페이지가 멈추지 않고 빠르게 반응할 수 있다.

***
## 데이터를 화면에 뿌리기
JS를 통해 새로운 HTML 태그를 만들기 (title의 내용)
1. 새로운 태그를 만든다.
2. 태그에 데이터를 넣는다.
3. 새로운 태그를 root에 추가한다.
 
***
## DOM (Document Object Model)
HTML 태그 하나하나를 자바스크립트로 컨트롤할 수 있도록 만든 체계 - **트리 구조**