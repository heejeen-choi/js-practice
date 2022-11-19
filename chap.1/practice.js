/*
22.11.13.sun (007~ 013)
 */

const a = 10;
const b = 20;
const sum = a+b;
console.log(sum);

const c = 11;
const d = 12;
const sumTotal = c+d;
console.log(sumTotal);

console.log('안녕하세요?', '지굼은', new Date(), '입니다.');

console.log(100 + 200);
console.log(200 - 80);
console.log(100 * 3);
console.log(400 / 5);
console.log(402 % 5);
console.log(2 ** 3);

/*
22.11.14.mon (014~ 023)
 */

let myName = 'jPub';
console.log(myName);

let myString = '제이펍';
let currentDate = new Date();
let myFunction = () => console.log('함수확인');

let muName = '펭귄';
muName = '고래';
console.log(muName);

let number1 = 10;
let number2 = 20;
let summ = number1 + number2;
console.log(summ);

let firstName = '브랜던';
let familyName = '아이크';
let fullName = firstName + familyName;
console.log(fullName);

let value1 = 100;
let value2 = value1;
console.log(value2);

let value;
console.log(value);

let e = 1,
    f = 2,
    g;
console.log(e + f);
console.log(g);

const myNamee = '사자';
console.log(myNamee);

const myString1 = '사자';
const myFunction1 = () => console.log('함수');

const number3 = 10;
const number4 = 20;
const ssum = number3 + number4;
console.log(ssum);

const faN = 'be';
const firN = 'aik';
const fullN = faN + firN;
console.log(fullN);

const myArray = [11, 22, 33];
myArray[0] = 55;
console.log(myArray);

const myObject = {
    id: 20,
    name: 'aa'
};
console.log(myObject);
myObject.id = 32;
console.log(myObject);

const valuee = 100;
const tax = 1.1;
const price = valuee * tax;
const result = 100 + 200 + 400;
console.log(result);

console.log('사과' == '사과');
console.log( 10 < 30 );
console.log(20 >= 30);

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);  // false. 참조하는 곳이 다르다.

const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4);

console.log(10 == '10');
// true. == : 두 데이터를 같은 타입으로
console.log(20 != '20');
// true. != : 같은 타입으로
console.log(10 === '10');
// false. === : 다른 타입으로
console.log(20 !== '20');
// true. !== : 다른 타입으로


/*
22.11.15.tue (024~ 035)
 */

//10.복합형/축약형 대입연산자 사용
let aq = 10;
let ba = 20;
aq += ba;
console.log(aq);

let cc = '자바';
let dd = '스크립트';
cc += dd;
console.log(cc);

let ew = 5;
let fe = 2;
ew *= fe;
console.log(ew);

//11.함수사용하기
//function 함수명(파라미터) {처리할 내용} : 함수정의
//                ㄴ> :함수에 전달되는 값(인수)
//return값 : 함수 내부의 값을 반환
//함수명(); : 함수를 실행

//입력 2에 대해 a+2의 결과를 반환하는 함수
function myFunc (a=2) {
    myFunc = a+2
};
console.log(myFunc);

function myFun (a) {
    const result = a+2;
    return result;
}
console.log(myFun(4))

myFunction = (a) => {
    const result = a+3;
    return result
}
console.log(myFunction(11));

function calSum(a, b, c) {
    const result = a+b+c;
    return result;
};
console.log(calSum(1,2,3));

calsSum = (a,b,c) => {
    const result = a+b-c;
    return result;
}
console.log(calsSum(3,9,5));

myFunt = () => {
    console.log('안녕하세요');
    return 100;
}

function myff() {
    cosole.log('안녕하세요');
    return 100;
}

function myfund(a) {
    const result = a+2;
    return result;
}
console.log(myfund(90));

//a가 100이상이면 return a가 실행되고
//return b는 실행되지 않고,
//a가 100미만일때 return b가 실행됨.
myFunctional = (a,b) => {
    if (a>=100) {
        return a;
    } else {
        return b;
    }
};
console.log(myFunctional(70, 80));

function calcFunc(price, tax) {
    const result = price + price * tax;
    return result;
}
const myResult = calcFunc(100, 0.1);
console.log(myResult);

myHello = () => {
    console.log('안녕하세요');
};
myHello();

//12.화살표함수사용하기(ArrowFunction)
const calccSum = (a, b, c) => {
    const result = a+b+c;
    return result;
}
console.log(calccSum(3,5,6));

const myFf = (a) => {
    return a+2;
};

const myFunction2 = a => {
    return a+2;
}

const myFunction3 = (a) => a+2;

//13.함수의파라미터 초깃값 설정하기
// function 함수명(파라미터1, 파라미터2=초기값2, 파라미터3=초기값3) => {}
//Default Parameter

//세금포함된 가격을 반환하는 함수
// @param price 가격
// @param tax 세율
function calcuFunc(price, tax=0.08) {
    const result = price+price*tax;
    return result;
}
const result2 = calcuFunc(100);
console.log(result2);

const result3 = calcuFunc(3000, 0.1);
console.log(result3);

//14.다수의 파라미터 가지는 함수정의
//파라미터[인덱스]
//(...파라미터) = > {} : 파라미터개수 미정의

//파라미터의 합계반환
calcSum = (...prices) => {
    let result = 0;
    for(const value of prices) {
        result += value;
    }
    return result;
}
const result5 = calcSum(12, 2);
console.log(result5);

const result6 = calcSum(5, 3, 11);
console.log(result6);

//15.조건문사용하기(if)
const myPrice = 15;
if (myPrice >= 50) {
    console.log('myPrice는 50 이상이다.');
} else if (myPrice >= 10) {
    console.log('myPrice는 10 이상 50 미만이다.');
} else {
    console.log('myPrice는 10 미만이다.');
}
//myPrice는 10 이상 50 미만이다. -------------------------- 1

reMyPrice = (a) => {
    if (a >= 50) {
        return ('reMyPrice는 50 이상.')
    } else if (a >= 10) {
        return ('reMyPrice는 10 이상 50 미만.')
    } else {
        return ('reMyPrice는 10 미만이다.')
    }
};
reMyPrice(54); //콘솔 창 아무것도 안찍힘 -------------------------- 2

reMyPricee = (a) => {
    if (a >= 50) {
        return ('reMyPricee는 50 이상.')
    } else if (a >= 10) {
        return ('reMyPricee는 10 이상 50 미만.')
    } else {
        return ('reMyPricee는 10 미만이다.')
    }
};
console.log(reMyPricee(54)); //reMyPricee는 50 이상. ---------- 3

reMyPrice1 = () => {
    if (reMyPrice1 >= 50) {
        console.log('reMyPrice1는 50 이상.')
    } else if (reMyPrice1 >= 10) {
        console.log('reMyPrice1는 10 이상 50 미만.')
    } else {
        console.log('reMyPrice1는 10 미만이다.')
    }
};
reMyPrice1(54); //reMyPrice1는 10 미만이다. -------------------------- 4

// reMyPrice2 = () => {
//     if (reMyPrice2() >= 50) {
//         console.log('reMyPrice2는 50 이상.')
//     } else if (reMyPrice2() >= 10) {
//         console.log('reMyPrice2는 10 이상 50 미만.')
//     } else {
//         console.log('reMyPrice2는 10 미만이다.')
//     }
// };
// reMyPrice2(54); //RangeError: Maximum call stack size exceeded ------ 5

reMyPrice2 = (a) => {
    if (a >= 50) {
        console.log('reMyPrice2는 50 이상.')
    } else if (a >= 10) {
        console.log('reMyPrice2는 10 이상 50 미만.')
    } else {
        console.log('reMyPrice2는 10 미만이다.')
    }
};
reMyPrice2(54); //reMyPrice2는 50 이상. -------------------------- 6

reMyPrice3 = (a) => {
    if (a >= 50) {
        return ('reMyPrice3는 50 이상.')
    } else if (a >= 10) {
        return ('reMyPrice3는 10 이상 50 미만.')
    } else {
        return ('reMyPrice3는 10 미만이다.')
    }
};
const result1 = reMyPrice3(54);
console.log(result1); //reMyPrice3는 50 이상. ------------------------ K.Answer


if (true) {
    console.log('Hello');
}
const randomNum = Math.random() * 10;
if (randomNum >= 5) {
    console.log('randomNum는 5 이상');
} else {
    console.log('randomNum는 5 미만');
}

// const randomNum1 = Math.random() * 10;
// if (random >= 5) console.log('randomNum1는 5 이상');


/*
22.11.16.wed (035~ 051)
 */

//16.조건문사용하기 (switch)
const myFruit = '사과';
switch (myFruit) {
    case '사과' :
        console.log('사과다.');
        break;
    case '귤' :
        console.log('귤이다.');
        break;
    case '포도' :
        console.log('포도다.');
        break;
    default :
        console.log('다른 과일입니다,');
        break;
}

const myFruit1 = 'apple';
switch (myFruit1) {
    case 'apple' :
    case 'orange' :
        console.log('apple or orange');
        break;
    default :
        console.log('other Fruit');
}

//switch는 === 비교를 한다.
const myValue = '100';
switch (myValue) {
    case 100 :
        console.log('숫자 타입의 100입니다.');
        break;
    default :
        console.log('숫자 타입의 100은 아닙니다.');
        break;
}

//17.반복문사용하기 (for)
// for ( 초기화; 반복문조건; 반복중처리구문 ) { 반복처리내용 }
// ㄴ>대량의 데이터 처리, 배열을 다룰 때 유용함
for (let index=0; index<10; index++) {
    console.log(index);
}

//18.반복문사용하기 (while)
// while ( 반복조건 ) { 반복처리내용 }
// ㄴ> 조건을 만족하면 계속 반복 작업. 코드로 반복종료시점을 지정해야함.
let myNumber1 = 0;
while (myNumber1 < 10) {
    console.log(myNumber1);
    myNumber1 += 1;
}

//19.반복처리스킵
for (let index=0; index<10; index++) {
    if (index%2 === 0) {
        continue;
    }
    console.log(index);
}
console.log('종료');
console.log('dd');

function myFfu(flgA) {
    for (let index=0; index<10; index++) {
        if (flgA === true) {                // flag === true 의미? 콘솔창은 어떻게해야 뭐로 나오는지?
            if (index%2 !== 0) {
                console.log(index);
            }
        }
    }
}
// const result7 = myFfu(flagA);
// console.log(result7);

myFfun = (flgA) => {
    for (let index=0; index<10; index++) {
        if (flgA === false) {
            continue;
        }                           // flag === true 의미? 콘솔창은 어떻게해야 뭐로 나오는지??
        if (index%2 === 0) {
            continue;
        }
        console.log(index);
    }
}

//20.진위여부판별하기
const al = 10;
const bl = 20;
console.log( al<bl );
console.log( al>bl );

// const isIOs = navigator.userAgent.includes('iPhone');                  // p46 ?????
// if (isIOs) {
//
// }

const userName1 = 'heejeen';
if (userName1) {
    console.log(`안녕하세요, ${userName1}`);
}
const address = '바다';
if (address) {
    console.log(`당신은 ${address}에 살고 계시네요`);
};
const beauty = '하늘';
if (beauty) {
    console.log(`${beauty}은 아름다워요.`);
}

const flg = 'JavaScript'.includes('a');
console.log(!flg);

console.log(!'heejeen');
console.log(!24);
console.log(![1, 2, 3]);

//21.숫자다루기
const la = 10;
const lb = 1.23;
const lc = -5;

//22.어림계산하기(반올림,올림,버림)
// Math.round(값) :반올림
// Math.floor(값) :버림
// Math.ceil(값) :올림
// Math.trunc(값) :정수만반환
console.log(Math.round(6.23));          // 콘솔 왜 안찍히나요//콘솔을안적어서
console.log(Math.floor(6.23));
console.log(Math.ceil(6.23));
console.log(Math.trunc(6.23));

// document.querySelector('.result').innerHTML = Math.round(6.23);  //document is not defined



/*
22.11.17.thur (052~ 062)
 */

//23.임의의 수 다루기
Math.random();
Math.floor(Math.random() * 100);
10 + Math.floor(Math.random() * 10);

// const rectangle = document.querySelector('.rectangle');
// document.querySelector('.button').addEventListener('click', onClick);
// function onClickButton() {
//     const randomHue = Math.trunc(Math.random() * 360);
//     const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
//     const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
//     rectangle.style.setProperty('--start', randomColorStart);
//     rectangle.style.setProperty('--end', randomColorEnd);
// }

// crypto.getRandomValues(타입지정배열) : 난수의 배열을 반환


//26.문자열다루기
const as = 'javaScript';
const ds = '제이펍';
const fd = 'web';

//27.문자열의 길이 확인하기
console.log('JavaScript'.length);
console.log('getRandomValues'.length);
// let textarea = document.querySelector('.textarea');
// let string_num = document.querySelector('.string_num');
// textarea.addEventList('keyup', onKeyup);

function onKeyUp() {
    //입력된 텍스트
    const inputText = textarea.value;
    //문자수를 반영
    string_num.innerText = inputText.length;
}

console.log(Array.from('◎').length);



/*
22.11.18.fri (063~ )
 */


//28.문자열의 공백 처리하기 (trim)
//문자열 양단의 공백제거 : 문자열.trim()
// 'trimming' trim()은 양단의 공백을 제거한 문자열을 반환한다.
//공백 = 스페이스,탭,줄바꿈문자를 의미. 양단아닌 문자열사이공백은 제거안됨.

//양단에 공백이 있을때
const targetString1 = ' 안녕 하세요 ';
console.log(targetString1);
const trimmedString1 = targetString1.trim();
console.log(trimmedString1);
//줄바꿈문자 삽입되어있는 경우
const targetString2 = '사과를 먹었어요\n';
console.log(targetString2);
const trimmedString2 = targetString2.trim();
console.log(trimmedString2);
//문자열 사이의 공백은 제거되지 않음
const targetString3 = ' 바다에. 가고 싶어 ';
console.log(targetString3);
const trimmedString3 = targetString3.trim();
console.log(trimmedString3);

//29.문자열 검색하기(인덱스 검색)
//원하는 문자열의 위치를 확인하고 싶을 때
//문자열시작인덱스: 대상문자열.indexOf(검색대상문자열, [검색시작인덱스(생략가능)]) //반환:숫자
//문자열종료인덱스: 대상문자열.lastIndexOf(검색대상문자열, [검색시작인덱스(생략가능)])
//정규표현일치인덱스: 대상문자열.search(정규표현)
const myString = ''