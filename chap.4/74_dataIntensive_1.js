/*
 ********************************************************************* 22.11.25.fri (p158~ 171)    !****! 첫부분 다시읽어보자
 */


//74.데이터타입 이해하기
//'참조 Reference'란, 메모리상의 데이터를 가리킨다,는 의미이다.
//다음은 숫자와 문자열을 참조하는 변수이다.

//메모리상의 100 이라는 데이터를 참조하는 변수 num
const num = 100;
//메모리상의 'elements'라는 데이터를 참조하는 변수 str
const str = 'elements';

//객체타입은 원형데이터가 아닌 다른데이터를 참조하는 데이터.
//다음의 배열은 데이터1,2,3을 참조하는 데이터이다.
const arr = [1, 2, 3];
//다음 연관배열은 키가 각각의 데이터를 참조한다.
const obj = {
    age: 243,
    name: 'natalie'
};


//75.가변성 Mutable과 불가변성 Immutable 이해하기
//원시타입Primitive : 특징=불가변성
//객체Object타입 : 특징=가변성
//원시타입과 객체타입의 차이는 데이터값의 변환가능 여부이다.

//가변성: 가변성객체타입 중 하나인 배열의 데이터에서, 첫번째 데이터는 1이지만, 100을 대입하면 1이 100으로 변경된다.
const myArray = [1,2,3];
myArray[0] = 100;
console.log(myArray);   // [100,2,3]

//불가변성: 대입한 값의 10은 더이상 변경되지 않는다. myNumber변수에 20을 대입하면 10이 20으로 바뀌는것이 아니라 20이라는 새로운 데이터를 참조하는 것이다.
let myNumber = 10;
myNumber = 20;
console.log(myNumber);   // 20

//76.데이터타입 확인하기
//데이터타입을 확인하고 싶을때
//데이터타입에 따라 처리작업을 지정할때
// typeof 데이터 : 의미=데이터타입을 확인

//typeof는 데이터타입을 확인하는 연산자. 타입정보의 문자열 비교가 가능하므로 자바스크립트의 타입 판별에 사용할 수 있다. typeof를 사용한 각 타입의 확인결과는,

console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof [1,2,3]);
console.log(
    typeof function() {
        console.log('test')
    }
);
console.log(typeof class MyClass {});


//77.객체인스턴스Instance 확인하기
//데이터 종류에 따라 처리를 구분할때
//데이터 instanceof 객체 : 의미=데이터가객체의 인스턴스인지 확인
//instanceof 는 데이터가 객체의 인스턴스인지를 확인하는 연산자. 함수를 정의할때 특정 인스턴스만 구분하도록 할 수 있다.
const today = new Date();
console.log(today instanceof Date);
console.log(today instanceof Array);

//자신이 정의한 클래스의 판별도 가능
//instanceof는 자시니 정의한 클랙스의 인스턴스 판별에도 사용할 수 있다.
class MyClass1 {}
class MyClass2 {}
const myInstance1 = new MyClass1();
const myInstance2 = new MyClass2();
console.log(myInstance1 instanceof MyClass1);   //true
console.log(myInstance2 instanceof MyClass2);   //true
console.log(myInstance2 instanceof MyClass1);   //false


//78.값Value 전달과 참조Reference 전달 이해하기
//원시 타입과 객체 타입의 처리를 이해할때
//원시Primitive타입 : 데이터전달방식=값의전달
//객체Object타입 : 데이터전달방식=참조의전달
//데이터를 변수에서 변수로 전달할 때 값에 의한 전달과 참조에 의한 전달방식이 있다. 자바스크립트의 Primitive타입은 값에의한 전달, Object타입은 Reference에 의한 전달 방식이다.

//1.값의 전달
let a = 100;
let b = a;
a = 500;
console.log(b); // 100
console.log(a); // 500
// (1)변수 a에 100을 대입.
// (2)변수 b에 변수 a를 대입. 변수 a에 대입한 값 100을 복사하여 변수 b에 전달(값에 의한 전달).
// (3)변수 a에 500을 대입.
// (4)변수 b의 데이터는 변함없이 100이 출력됨.

//2.참조의 전달
let aa = [1,2,3];
let bb = aa;
aa[0] = 100;
console.log(bb);    // [100,2,3]
console.log(aa);    // [100,2,3]
// (1)변수 aa에 1,2,3을 참조하는 배열을 대입.
// (2)변수 bb에 변수 aa를 대입. 변수 aa에 저장 된 배열의 참조값이 변수 bb에 전달됨(참조에 의한 전달).
// (3)변수 aa에 저장 된 배열의 첫번째 요소가 100을 참조.
// (4)변수 bb와 변수 aa는 같은 배열을 참조하기 때문에 [100,2,3]이 출력됨.

//함수의 인수 역시 원시타입은 '값', 객체타입은 '참조'를 전달.
//함수에 원시타입의 데이터를 전달하는 코드를 확인해보자. 함수 내 처리결과는 변수 t에 영향주지 않음.
myFunction = (x) => {
    x += 2;        //(1)전달받은 파라미터에 2를 더하는 함수
};
let t = 10;         //(2)변수 t에 10을 대입
myFunction(t);      //(3)myFunction에 t를 전달, 복사된 데이터 10을 함수에 전달.
console.log(t);     //(4)10이 출력된다. '2가 더해진 12가 아님'

//함수에 객체 타입의 데이터를 전달하는 코드.
//함수 내 처리결과는 변수 a에 영향을 준다. 함수의 파라미터를 다룰때는 데이터의 타입을 확인하여 값, 참조의 전달을 적절히 사용하도록하자.
myFuntion = (x) => {
    x[0] = 100;         //(1)전달받은 배열의 첫번째 요소에 100을 대입하는 함수
}
let g = [1,2,3];        //(2)변수 g에 [1,2,3]을 대입
myFuntion(g);           //(3)myFuntion()에 g를 전달. 배열데이터 [1,2,3]메모리의 위치를 함수로 전달.
console.log(g);         //(4)[100,2,3]출력. '[1,2,3]이 아님'



//79.데이터타입변환하기.
//Boolean(데이터):데이터를 진리값으로, String(데이터):데이터를 문자열타입으로, Number(데이터):데이터를 숫자타입으로, parseInt(문자열):문자열을 숫자(정수)타입으로, parseFloat(문자열):문자열을 숫자(부동소수점)타입으로
//숫자 100과 문자열 '200'의 덧셈계산을 하려면 먼저 문자열을 숫자타입으로 변환해야함. number()를 사용해 타입변환 후 덧셈을 계산하기를 해보쟈
const result = 100 + Number('200');
console.log(result);

//Boolean()과 String() 등의 메소드를 사용해 데이터타입을 변환하는 것 : 명시적 형번환
Boolean(1);     //true
Boolean(0);     //false
Boolean('lio');     //true
Boolean('');        //false
String(1);      //"1"
Number('1');    //1
Number('');     //0
Number('lily');     //NaN
Number(true);       //1
Number(false);      //0

//데이터타입이 자동으로 변환되는것 : 암시적 형변환 (명시적 형변환과 반대개념)
console.log(100 + '200');   //100200
console.log('200' - 100);   //100
console.log(1 == '1');      //true
//암시적형변환의 숫자타입과 문자열타입의 +연산은 타입위치에 따라 결과가 바뀐다. 데이터와 타입을 모두 비교할때는 == 아니고 === 사용

//변수의 동적타입 변환
//자바스크립트의 데이터는 문자열,숫자,진리값 등의 타입이 필수요소다. 다음의 코드는 변수 ee의 선언에 숫자타입을 대입하지만, 이어서 문자열을 대입한다. 문자열 대입하면 변수 ee는 문자열타입으로 변환
let ee = 10;
ee = 'rose';
console.log(ee);    //rose



//80.정의되지 않은 데이터 Undefined 이해하기
//값이 없는 변수처리 이해
//정의 되지 않은 데이터처리의 이해
//Undefined : 데이터가 정의되지 않음
//데이터없음 : Undefined | Null : 원시타입
// (1)변수에 데이터를 대입하지 않는다.
// (2)객체의 속성에 값을 대입하지 않는다.
// (3)파라미터에 값을 전달하지 않는다.

let nf;
console.log(nf);
const objec = {};
console.log(objec.bb);
myFunct = (ce) => {
    console.log(`b의 값은 ${ce}`);
}
myFunct();


//80. Null

searchUser = (targetId) => {
    const userList = [
        {
            id: 293,
            name: 'sad'
        },
        {
            id: 234,
            name: 'depressing'
        },
        {
            id: 54,
            name: 'gloomy'
        },
        {
            id: 432,
            name: 'blue'
        }
    ];

    // 해당유저검색
    const targetUser = userList.find((user) => user.id === targetId);

    if (targetUser === undefined) {
        return null;
    }
    return targetUser.name;
}
console.log(searchUser(234));
console.log(searchUser(5));