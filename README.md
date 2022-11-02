# 팀이름
---
## Caerang Tutor ✏️


### 아이디어
> [Copilot](https://github.com/features/copilot)에서 영감을 얻은 아이디어

이번 하계 워크샵이 중간에 종료 됨에 따라 **태그팀**에서는 매주 5문제 백준 알고리즘을 푸는 것으로 대신 했었습니다. 그때 느낀점은 <u>_나랑은 푸는 방법이 달라도 팀장님이나 멘토 분들의 코드를 보고 싶다_</u> 였습니다. 따라서 **Caerang-tutor**를 생각하게 되었습니다. 또한 기존 **Copilot**은 깃허브의 public 레포지토리들을 학습하였다고 하여 저작권 문제와 추후 높은 비용 문제가 발생 할 수 있다는 점이 있습니다. 그래서 생각한 것이 <u>씨애랑 동아리만을 위한 Copilot을 만들면 좋겠다고 생각하게 되었습니다.</u>

### 설명
* **NodeJS**를 통해 서버를 구축하여 웹 또는 앱(아직 미정)으로 통신하는 방법을 고민 중
* **MySQL**을 이용해 함수 이름과 함수 코드를 작성하여 작성한 함수를 데이터베이스에 저장함
* 검색기능을 통해 저장 되어 있는 함수의 코드 검색

ex)
```js
// add 라는 함수 이름 검색시 아래 코드가 나타남
// 코드
function add(param1, param2) {
	const result = param1 + param2;
	return result;
}

// 작성자: 길홍배
// 언어: JavaScript
```

```java
// multiply 라는 함수 이름 검색시 아래 코드가 나타남
// 코드
public static double multiply(param1, param2) {
	double result = param1 * param2;
    return result;
}

// 작성자: 이은재
// 언어: java
```

### 기대

워크샵, 팀 교육 등 씨애랑 내 교육 용도로 사용 될 목적으로 제작.
또는 본인이 작성한 함수를 공유하는 용도로 사용 될 것으로 기대


---
### 개발 툴 🔨
* Android Studio
* HTML
* CSS
* JavaScript
* NodeJS
* MySQL


---
# 출처
https://codepen.io/Markshall/pen/PoZJRve

---
# request 방법
![image](https://user-images.githubusercontent.com/101651909/199499274-6979aaf6-a86b-435a-b182-4c205cc1e27b.png) <br>
서버도메인/func 으로 get 요청을 보낼 때 searchType 과 keyWord 라는 Query 를 함께 보내면 된다.

![image](https://user-images.githubusercontent.com/101651909/199500469-a8a43774-007d-4c48-bc4f-389cb41192ad.png) <br>
EditTextView 에 addTextChangedListener 를 구현해서 EditText 에 입력이 들어올 때 get 요청을 보낸다.(get 요청이 너무 빈번하게 일어나서 문제가 있을지도) <br>
LiveData 를 사용했기 때문에 Observer 를 통해 get 요청 결과를 관찰한다.
## Postman get요청 예시
![image](https://user-images.githubusercontent.com/101651909/199499795-089e5de7-e616-4ab3-92ec-6df9adc28b9b.png)

[안드로이드 앱 github](https://github.com/EJLee1209/CearangTutor)
