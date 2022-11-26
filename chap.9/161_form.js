/*
 ********************************************************************* 22.11.26.sat (p332~ )
 */



//161.텍스트 박스 값 읽어오기
//html폼의 데이터값을 가져올때, 텍스트 입력폼의 데이터를 변경할때

// input요소.value : 입력폼의 문자열
// input 요소는 : <input type = "text" />
//input요소의 타입속성을 텍스트로 설정하면 텍스트입력 폼이 표시되낟. 텍스트입력폼은 유저로부터 임의의 텍스트를 입력받음/ 자바스크립트는 value 속성으로 요소를 참조하여 데이터값을 확인할수있으며 value속성은 문자열 string이다.
//<input type="email" /> : 스마트폰 키보드에 영문키보드가 표시 됨.
//<input type="tel" /> : 스마트폰 키보드에 번호입력용 키보드가 표시 됨.



//162.텍스트박스값 변경확인하기.
//change : input요소 변경시 이벤트,
//input : input요소 키 입력시 이벤트
//addEventListener()를 사용해 이벤트 핸들러를 설정한다. 텍스트입력폼의 데이터변경여부는 change 와 input 이벤트로 감시가 가능. 이벤트핸들러내부 함수는 텍스트박스 값 읽어오기방법을 사용.
//input 이벤트는 : 키입력 발생과 함께 발생하고
//change 이벤트는 : Enter 키 혹은 포커스가 벗어났을때 발생.



//163.텍스트영역 값 읽어오기.
//텍스트영역요소.value


//164.
<textarea id="myText">
    아.
    괜찮아요.
</textarea>

const element = document.querySelector('#myText');
const value = element.value;
console.log(value);


//165.체크박스상태 읽어오기
// input요소.checked : 선택상태확인
// input요소의 type속성을 checkbox로 설정하면 체크박스가 표시된다. 유저가 온/오프 상태를 전환할수있다. 속성은 Boolean값이다.
const element = document.querySelector('#cbA');
element.checked = true;



//167.파일선택기능을 표시
input 요소.files
<input type="file" />
//    자바스크립트는 : change 이벤트가 발생하면 event.target.files 속성을 참조하여 input 요소에 지정된 파일 리스트를 가져올 수있다
//  multiple 속성을 지정하면 하나가 아닌 여러파일의 작업도 가능하며, files속성의 배열도 여러개의 요소를 가진다.

const element = document.querySelector('#myFile');
element.addEventListener('change', (event) => {
    const target = event.target;
    const files = target.files;
    const file = files[0];

    alert(`${file.name} 파일이 선택되었습니다.`);
});



//168.텍스트형식으로 파일읽어오기

const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');
element.addEventListener('input', (event) => {
    const target = event.target;
    const files = target.files;
    const file = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        pEl.textContent = reader.result;
    });
    reader.readAsText(file);
});



//169.데이터형식으로 파일읽어오기

const element = document.querySelector('#myFile');
const imgEl = document.querySelector('.log img');
element.addEventListener('input', (event) => {
    const target = event.target;
    const files = target.files;
    const file = files[0];

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        imgEl.src = reader.result;
    });
    reader.readAsDataURL(file);
});



//170.라디오버튼상태읽어오기
//  라디오버튼은 여러 선택항목 중 하나의 데이터를 선택하는 폼이다. 자바스크립트로 라디오버튼을 다루는 것은 다른 폼요소보다 조금 더 복잡. input요소의 type속성을 radio로 설정하고, name속성으로 관련성을 설정한다.
<label>
    <input
        type="radio"
        name="fruit"
        value="apple"
        checked
    />
    Apple
</label>

<label>
    <input
        type="radio"
        name="drink"
        value="wine"
    />
    Wine
</label>

const element = document.querySelector('form#radioGroup');
const drinkValue = element.drink.value;
const fruitValue = element.fruit.value;
console.log(`drink의 값은 ${drinkValue}입니다.`);
console.log(`fruitValue의 값은 ${fruitValue}입니다.`);



//172. 드롭다운 메뉴값읽어오기
//select요소.value
const element = document.querySelector('#mySelect');
const value = element.value;
const log = `선택된 값은 ${value}입니다.`;
document.querySelector('.log').innerHTML = log;



//173.드롭다운메뉴값 변경확인하기
//드롭다운 메뉴상태변경 시점에 작업처리할때

const element = document.querySelector('#mySelector');
element.addEventListener('change', handleChange);
handelChange = (event) => {
    const value = element.value;
    const log = `선택된 값은 ${value}입니다.`;
    document.querySelector('.log').innerHTML = log;
}



//178.
selectElement.addEventListener('change', (event) => {
    const value = event.target.value;
    const message = value === '' ? '지역이 선택되지 않았습니다.' : `선택된 지역은 ${value}입니다.`;
    document.querySelector('.log').innerHTML = message;
});
//메시지작성에서 사용한 삼항연산자는 "진리값 ? 값1 : 값2", 진리값이 true인경우 값1, false인 경우 값2를 반환한다.



//179.폼전송하기
//폼전송 전 추가작업 처리할때
//폼전송 전 확인작업할때
// submit()으로 폼전송 전의 데이터를 가공하거나 데이터 전송여부확인 가능. 전송 취소 후 재입력을 요구할때는 event.preventDefault()를 사용해 이벤트를해제한다

const formElement = document.querySelector('form');
formElement.addEventListener('submit', handleSubmit);
handleSubmit = (event) => {
    const isYes = confirm('이 내용으로 전송?');
    if (isYes === false) {
        event.preventDefault();
    }
}

