/*
 ********************************************************************* 22.11.28.mon (p522~ )
 */



//259.함수내부 변수와 상수의 범위알기
//처리를 단위로 분할하고 싶을때
//변수,상수의 유효범위를 좁히고 싶을때
/**
 * {} = 의미:블록스코프
 */
// (1) let 과 const 로 선언된 변수와 상수는 {}로 감싸진 범위의 블록 내에서만 사용할 수 있다.
// (2) 변수와 상수가 유효한 범위를 스코프 Scope 라고 하며,
// (3) {} 로 감싸진 유효범위를 블록스코프 BlockScope 라고 한다.

//다음의 상수 a는 블록스코프 내에서 사용되고 있으므로 모든 console.log()에 20이라는 결과가 출력된다. 블록 외부에서 선언한 변수와 상수도 내부에서 사용할수있다.
{
    const a = 20;
    console.log(a);     //20
    {
        console.log(a);     //20
    }
}
//scope를 벗어나므로 에러발생
console.log(a);     //ReferenceError: a is not defined
//블록의 외부에서 상수 a를 사용하면 에러가 발생한다. 이유는 블록내부에서 선언된 상수는 외부에서 액세스가 불가능하기 때문이다.

//모든 scope의 가장 상위는 전역scope가 된다. 전역스코프에서 선언한 상수와 변수는 모든 블록에서 사용할 수 있다.
const b = 20;
{
    console.log(b);     //20
}

//블록은 함수,if문,for문 등 여러곳에서 사용된다.
const myFunction = () => {
    const myValue = 'alaal';
    console.log(myValue);

    const myChildFunction = () => {
        console.log(myValue);   // 'alaal'
    }
    myChildFunction()   //'alaal'
}
myFunction();   //'alaal'
    console.log(myValue);   //스코프를 벗어나므로 에러발생

//if문
if (true) {
    const myValue2 = 'sfa'
}
console.log(myValue2);  //myValue2는 스코프를 벗어나므로 에러



//260.클래스정의하기
//특정기능을 클래스로 만들고싶을때
//자바스크립트에서 객체지향프로그래밍을 구현하고 싶을때
/**
 * class 클래스명 {} = 의미:클래스를 선언
 */
//키워드 class를 사용해 클래스를 선언하며, 클래스명은 카멜케이스 CamelCase 이용
class MyClass {}

//클래스에 constructor()를 삽입하면 초기화시 해당 메소드가 실행되며, constructor()문의 삽입은 한번만 가능하다.
class MyClass {
    constructor() {
        console.log('클래스가 초기화 되었습니다.');
    }
}

//클래스 초기화시 초기값을 constructor()의 인수로 전달하여 외부값을 사용할 수 있다.
class MyClass {
    constructor(value1, value2) {
        console.log(`${value1}`);
        console.log(`${value2}`);
    }
}
new MyClass('fox', 24);

//클래스는 고유의 변수와 함수를 가질 수 있으며, 이 요소를 멤버라고 한다.
class MyClass {
    constructor() {
        //멤버변수
        this.myField = 'Apple'
    }
    //멤버함수
    myMethod() {
        console.log(this.myField);
    }
}



