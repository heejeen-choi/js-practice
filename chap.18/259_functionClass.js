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


//261.클래스 사용하기 (인스턴스화)
//클래스를 인스턴스화하고 싶을때
//생성한 클래스를 사용하고 싶을 때
/**
 * new 클래스명() : 클래스 인스턴스화
 *
 * class 선언으로 정의한 클래스를 실제 데이터로 사용하기 위해서는 new 연산자를 사용하며, 인스턴스화가 필요하다.
 * 인스턴스화 한 데이터는 클래스 내 각 요소와 메소드에 접근 가능하다.
 *
 */

class MyClass {
    constructor() {
        this.classField = 12
    }
    classMethod() {
        console.log('메소드가 실행되었습니다.')
    }
}
const myInstance = new MyClass();

console.log(myInstance.classField);
myInstance.classMethod();



//262.클래스에서 변수 사용하기
//클래스에서 변수 사용하고 싶을때
//API 통신 결과 클래스를 생성하고 싶을때
/**
 * this.변수명 = 값 : 의미=멤버변수 정의
 *
 * 클래스에 속하는 변수를 클래스필드, 클래스변수, 멤버변수 라고 한다.
 * 클래스에 멤버변수를 정의하기 위해서는 다음과 같이 constructor() 내부에 'this.변수명'을 사용한다.
 * 여기서는 this라는건 클래스 자신을 가리킨다.
 * 클래스 멤버변수에 let 과 const 를 사용하지 않도록 주의하자.
 *
 */
class MyClass {
    constructor() {
        this.myField = 100;
        this.myField1 = '사자';
    }
}
//멤버변수는 초기값 대입이 가능하며, 대입하지 않으면 undefined로 정의된다.

class MyClass {
    constructor() {
        // myField 에 초기값 '사자'를 대입
        this.myField = '사자';
    }
}
//인스턴스(new 클래스명())의 멤버변수 접근은 '인스턴스.멤버변수명'을 사용하며, 객체의 속성 접근방법과 같다.
class MyClass {
    constructor() {
        this.myField1 = 100;
        this.myField2 = '사자';
    }
}
//인스턴스화
const myInstance = new MyClass();
console.log(myInstance.myField1);
console.log(myInstance.myField2);

//constructor()도 함수이므로 파라미터(매개변수)의 초기값을 지정할 수 있다.