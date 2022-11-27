/*
 ********************************************************************* 22.11.27.sun (p466~ )
 */



//228.JSON 알아보기
//네트워크로 데이터를 송수신할때, 데이터를 정의할때
//JSON은 범용적인 데이터 형식. 서버와의 통신이나 데이터의 외부 파일 저장 등에 사용한다. JSON은 자바스크립트뿐만 아니라 PHP나 자바 등 다른 언어에서도 사용됨. JSON은은 텍스트에디터로 편집가능, 자바스크립트로 불러오기가 쉽고 다양한 구조의 데이터도 유연하게 사용할 수 있다.

//각 학급의 정보를 JSON 데이터로 정의
{
    "students": 40,
    "grade": 4,
    "name": "C반"
}

//JSON 데이터는 키와 값을 조합하여 정의한다. 키는 문자열만 가능하며 반드시 큰따옴표""와 함께 표기한다. 기본적으로 자바스크립트의 문법을 그대로 사용할 수 있고 값에 숫자,문자열,진리값,배열,객체가 올 수 있다. JSON은 객체 내부에 객체를 넣을 수 있으므로 깊은계층의 데이터를 정의할 수 있다.
{
    "name": "A학교",
    "classes": [
        {
            "students": 40,
            "grade": 4,
            "name": "C반"
        },
        {
            "students": 20,
            "grade": 2,
            "name": "B반"
        }
    ]
}

//자바스크립트의 객체와 배열은 요소의 마지막에 콤마(,)를 허용하지만 JSON은 에러남.
{
    "name": [1,2,3,4]
}
{
    "name": [1,2,3,4,]  //ERROR
}

//문자열의 정의는 큰따옴표""사용, 없거나 singleQuote는 에러뜸.



//229.JSON문자열 객체로 변환하기
//JSON문자열을 자바스크립트의 객체에서 사용할떄, 네트워크에서 받은 JSON문자열을 사용할때
// JSON.parse(문자열) : JSON 형식의 문자열을 JSON 객체로 변환
//JSON.parse()를 사용해 JSON 문자열을 해석하고 자바스크립트의 값과 객체로 변환한다. JSON.parse()로 변환한 문자열은 자바스크립트의 객체로 처리되므로 마츰표(.)를 사용해 참조할 수 있다.

//JSON 문자열
const jsonString = `{ "students": 40, "grade": 4, "name": "C반" }`;
//문자열을 자바스크립트의 객체로 변환
const data = JSON.parse(jsonString);
console.log(data);
console.log(data.students);
console.log(data.grade);
console.log(data.name);



//230.객체를 JSON 변환하기
//자바스크립트의 객체를 JSON 문자열로 변환할때
// JSON.stringify(obj) : 자바스크립트객체를 JSON문자열로 변환
const data = {
    a: 1000,
    b: '맥주 마시는 중'
};
const str = JSON.stringify(data);
console.log(data);      // { a: 1000, b: '맥주 마시는 중' }
console.log(str);       // { "a": 1000, "b": "맥주 마시는 중" }



//231.JSON변환에 들여쓰기 적용하기
// JSON.stringify(obj, null, '')
// JSON.stringify 의 세번째 인수는 JSON문자열의 줄바꿈과 들여쓰기 삽입을 위해 사용한다. 들여쓰기 삽입을 위한 문자열을 지정하거나 숫자를 전달하면 그만큼의 공백이 삽입된다.
const data = { a:1000, b:'babe' };
const str = JSON.stringify(data, null, '*');
console.log(str);       //  {
//                          *"a": 1000,
//                          *"b": "babe"
//                          }



//232.JSON변환기능 커스터마이징
//일부데이터만 JSON변환작업을 할때
// JSON.stringify(obj, replace, space) : 일부데이터를 JSON문자열로 변환
// JSON.stringify()의 두번째인수는 replacer 함수를 호출하며 이 함수는 JSON데이터변환 룰을 설정할수있다. 예를 들어, 숫자인경우 작업을 무효화하고 문자열인 경우에만 작업을 실행하도록 지정할수있다.

const replacer = (key, value) => {
    //숫자형식은 처리 제외
    if (typeof value === 'number') {
        return undefined;
    }
    return value;
};

const obj = {
    pref: 'seoul',
    orange: 100,
    flag: true,
    apple: 100
};

const str = JSON.stringify(obj, replacer, ' &* ');
console.log(str);   // {
//                      &* "pref": "seoul",
//                      &* "flag": true
//                     }



//233.fetch()로 텍스트데이터읽어오기
// fetch(URL) : URL로 데이터 가져오기 : 반환=Promise
//fetch()를 사용하면 간단하게 외부파일을 가져올수있다. 프로그램에서는 데이터 다운로드의 시간예측이 불가능하므로
// * 데이터를 읽어오는 첫번째단계
// (1) Promise의 then()을 사용해 비동기로 처리한다. fetch()로 데이터를 가져온뒤 then()을 호출한다.
fetch('sample.txt') //(1)
.then((data) => data.text())    //(2)
.then((text) => {
    console.log(text);
})  //(3)
// (2) 네트워크에서 가져온 데이터는 다양한 형식이 있으므로 데이터를 프로그램의 목적에 맞게 해석해야한다. 위 코드에서는 텍스트 형식의 데이터를 사용하므로 (1)에서 가져온 데이터를 text()를 사용해 해석하고
// (3) 이 결과를 이어지는 then()에서 처리하는것이 두번째 단계

//await과 async를 사용하는 방법
//await과 async는 Promise에 의한 비동기처리를 동기처리와 같이 알기쉽게 표기할 수 있다.
async function load() {
    const data = await fetch('sample.txt');
    const text = await data.text();
    console.log(text);
    document.querySelector('#log').innerHTML = text;
}
load();


