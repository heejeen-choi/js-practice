/*
 ********************************************************************* 22.11.28.mon (p522~ )
 */


//251.정보,에러,경고 출력하기
//자바스크립트의 실행 결과를 확인할때
//상태에 따라 콘솔사용을 분류할때
console.log() //로그표시
console.info() //정보표시
console.warn() //경고표시
console.error() //에러표시
//콘솔은 동작 확인을 위한 로그와 경고,에러를 표시하는 로그 등 상태에 따라 네종류의 명령이 있다.



//252.객체구조출력하기
//깊은 계층의 데이터 요소를 확인할때
console.dir() //객체구조출력
console.table() //객체구조

const myObject = {
    id: 2,
    name: 'apple'
};
console.dir(myObject);  // {id:2, name:'apple'}
// console.dir(document.body);

const myArray = [
    {
        id: 100,
        age: 434,
        fav: 'AFE'
    },
    {
        id: 34,
        age: 3434,
        fav: 'EWT'
    }
];
console.table(myArray);



//253.에러파악하기
//프로그램 실행중 발생한 에러를 파악할때
//상수에 값을 재대입하거나 undefined.myValue와 같이 존재하지 않는 값에 액세스를 시도하면 에러(예외)가 발생한다. 에러가 발생하면 해당 시점에서 프로그램은 중단되며, 이후의 처리는 실행되지 않는다.
const a = 10;
console.log(`상수 a의 값은 ${a}입니다.`);
a = 20;
console.log(`다음 작업을 실행합니다.`);



//254.에러객체 생성하기
//에러의 내용을 설정할때
new Error() //인수에는=에러내용, 의미=Error인스턴스생성
Error 인스턴스.message //의미=에러내용
//에러는 프로그램 실행 중 자동으로 발생하는 것 외에도 개발자가 의도적으로 발생시킬 수 있다. 이를 에러던지기 ThrowError 라고 표현하며, 함수에 부정확한 값이 전달되거나 API에서 의도치 않은 값이 반환되는 경우에 사용할수있다.

//에러내용은 Error 객체로 표현하며, 인스턴스화 시 전달하는 인수에 에러내용을 설정한다.
//Error객체 인스턴스화
const error = new Error('에러가 발생했습니다.');

//Error객체는 에러에 관한 정보를 포함하며, Error인스턴스의 message 속성으로 에러의 내용을 가져온다.
//Error 객체 인스턴스화
const error = new Error('에러가 발생했습니다.');
console.log(error.message);



//255.에러발생시키기
//API 통신 중 부정확한 값 발견시 에러처리를 하고싶을때
// throw Error 인스턴스 : 의미=에러던지기
//생성한 에러는 throw를 사용해 던질 수 있다. 파라미터가 숫자타입이 아닌경우 에러를 던지고 alert()으로 내용을 표시해보자,

//파라미터 value가 숫자타입이 아닌경우, 에러를 발생시키는 함수
const myFunction = (value) => {
    if (typeof value !== 'number') {
        //에러생성
        const error = new Error(`'${value}'는 Number 타입이 아닙니다.`);
        //에러내용을 alert()으로 표시
        alert(error.message);
        //에러던지기
        throw error;
    }
    console.log(`'${value}'는 숫자타입입니다.`);
}
myFunction(5);  //에러없음
myFunction('ladl');  //에러발생



//256.에러발생확인하기
//에러종류를 확인할때
//에러가 발생해도 작업을 계속 진행할때
//에러발생시 특정 처리를 실행할때
// try {} catch (error) {} : 의미=에러처리

//에러가 발생하면 이후의 작업은 중단되지만 작업 내용에 따라 에러가 발생해도 처리를 지속해야할 경우 try와 catch를 사용한다.
// (1) try{} 에서 에러가 발생하면 catch(error){} 부분이 실행되며,
// (2) Error 객체를 가져와 에러내용의 표시 등이 가능하다.
// (3) try, catch에서 에러가 처리되므로 이후의 작업이 계속 진행된다.

const error = new Error('에러가 발생했습니다.');
console.log(error.message);

const a = 10;
try {
    a = 20;     //a에 값을 다시 대입하면 에러발생
} catch (error) {
    console.log(`에러가 발생했습니다: ${error.message}`);
}
console.log(`상수 a의 값은 ${a}입니다.`);



//257.에러발생시 실행코드 설정하기
//에러가 발생해도 실행을 중단하고 싶지않을때
//에러발생시 특정 처리를 실행하고싶을때
// try{} catch (error) {} finally{}
// (1) finally{}는 try{}의 에러발생여부와 상관없이 실행된다.
// (2) 그러므로, 에러여부에 상관없이 실행하고 싶은 코드가 있다면 finally{}에 배치한다.

/** 50% 확률로 에러를 발생시켜 try와 catch 처리 */
const generateError = () => {
    try {
        //50%확률로 에러발생
        if (Math.random() > 0.5) {
            throw new Error();
        } else {
            console.log('에러없음');
        }
    } catch (error) {
        //에러발생시 처리
        console.log('에러발생');
    } finally {
        //에러발생여부 상관없이 실행
        console.log('에러 처리가 완료되었습니다.');
        console.log('----------');
    }
}
//3초마다 generateError() 실행
setInterval(generateError, 3000);



//258.에러종류파악하기
//에러발생시 에러의 종류를 확인하고자 할때
/** 종류
 * RangeError : 값이 허용범위 내에 없음
 * ReferenceError : 선언되지 않은 변수를 호출
 * SyntaxError : 언어구문 부정확
 * TypeError : 데이터타입 부정확
 * URIError : URI 부정확
 */
//Error 객체는 몇가지 종류가 있다. 자바스크립트에서 이러한 에러의 파악이 가능하면 그 종류에 따른 수정 작업이 용이하다.
// 예를 들어 SyntaxError는 구문에러이므로 코드기술방식의 문제를 확인하여 해결하며,
// TypeError는 null 객체 액세스 등의 문제이므로 데이터타입의 문제를 찾아 해결한다.

try {
    let obj  null;   //의도적으로 에러가 생기는 코드를 생성
} catch (error) {
    console.error(error);
}       //Error: Uncaught SyntaxError: Unexpected token 'null'



