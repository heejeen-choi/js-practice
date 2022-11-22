/*
 *********************** 22.11.13.sun (007~ 013)
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
 *********************** 22.11.14.mon (014~ 023)
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
 *********************** 22.11.15.tue (024~ 035)
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
console.log(result1); //reMyPrice3는 50 이상. ------------------------ A.


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
 *********************** 22.11.16.wed (035~ 051)
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
}
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
 *********************** 22.11.17.thur (052~ 062)
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
 *********************** 22.11.18.fri (063~ 063)
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



/*
 *********************** 22.11.19.sat (064~ 067)
 */


//29.문자열 검색하기(인덱스 검색)
//원하는 문자열의 위치를 확인하고 싶을 때
//문자열시작인덱스: 대상문자열.indexOf(검색대상문자열, [검색시작인덱스(생략가능)]) //반환:숫자
//문자열종료인덱스: 대상문자열.lastIndexOf(검색대상문자열, [검색시작인덱스(생략가능)])
//정규표현일치인덱스: 대상문자열.search(정규표현)

const myStrings = '자바스크립트를 알자 ABCD';

const a1 = myStrings.indexOf('자바스크립트');
console.log(a1);
const a2 = myStrings.indexOf('알자');
console.log(a2);
const a3 = myStrings.indexOf('크');
console.log(a3);
const a4 = myStrings.indexOf('HTML');
console.log(a4);                //결과: -1 지정문자열이 존재하지 않음
const a5 = myStrings.indexOf('b');
console.log(a5);                //결과: -1 대소문자구분


//30.문자열검색하기(부분검색)
// 지정 문자열의 포함 여부를 확인하고 싶을 때, 입력폼의 부적절한 문자를 체크하고 싶을 때
// 반환은 boolean값
// includes() : 문자열 포함 여부 확인
// startsWith() : 문자열 시작 문자 확인
// endsWith() : 문자열 종료 문자 확인

const myString2 = 'JavaScript를 배우자';

// const aa1 = 'JavaScript를 배우자'.includes('JavaScript');
const aa1 = myString2.includes('JavaScript');
console.log(aa1);
const aa2 = 'JavaScript를 배우자'.startsWith('배우자');
console.log(aa2);
const aa3 = 'JavaScript를 배우자'.endsWith('배우자');
console.log(aa3);
// indexOf()는 지정 문자열의 인덱스를 반환
// includes()는 지정 문자열의 포함 여부를 반환



/*
 *********************** 22.11.21.mon (068~ 080)
 */

//31. 문자열에서 문자 다루기(문자열에서 문자 추출하기)
//지정한 위치의 문자를 추출하고 싶을 때
// 문자열.charAt([인덱스(생략가능)]) -> 반환: 문자
//문자열에서 원하는 부분만을 추출할 때 사용한다. charAt()는 지정한 인덱스 위치의 문자를 반환.

const charIndex = 'JavaScript';

const charThree = charIndex.charAt(3);
console.log(charThree);
const charZero = charIndex.charAt();
console.log(charZero);

// [Task] p69~70 convert html/JavaScript to React

//32.문자열 다루기(위치 지정하여 선택하기)
//지정 범위 내의 문자열을 추출하여 사용하고 싶을 때
//지정 위치 이후의 문자열을 추출하여 사용하고 싶을 때
//문자열.slice(시작인덱스, [종료인덱스(생략가능)]) => 반환: 문자열
//문자열.substring(시작인덱스, [종료인덱스(생략가능)]) => 반환: 문자열
// 지정한 문자열의 일부를 추출하고 싶을 때 slice(), substring()을 사용한다. 지정한 인덱스의 시작지점부터 종료지점까지 문자열을 추출하며, 종료 인덱스를 생략하면 범위는 문자열의 끝까지로 지정된다. 지정한 위치 이후의 문자열을 모두 추출하거나 시작과 종료 인덱스를 지정하여 추출할 때 사용.

const iindex = 'JavaScript';

const ak = iindex.slice(0, 4);
console.log(ak);
const bk = iindex.slice(0);
console.log(bk);
const ck = iindex.substring(0, 4);
console.log(ck);
const dk = iindex.substring(0);
console.log(dk);
//slice() 인수는 : 음의 정수도 가능. 음의 정수는 뒤에서부터 문자열을 추출하며 시작 인덱스는 -1이다.
const ek = iindex.slice(-2);
console.log(ek);
const fk = iindex.slice(-2, -1);
console.log(fk);
//substring()는 음의 정수를 모두 0으로 간주, 뒤에서부터 문자열의 인덱스를 지정하는 음의 정수를 사용할 수 없다.
//slice()와 substring()은 비슷하지만, 시작인덱스가 종료인덱스보다 클 때 처리방식이 다르다. substring()은 시작값이 종료값보다 클 경우 두 인덱스를 바꿔 작업을 처리한다.
const gk = iindex.slice(5, 1);
console.log(gk);
const hk = iindex.substring(5, 1);
console.log(hk);

//33.문자열다루기 (글자수 지정하여 선택하기)
//위치와 글자수를 지정한 문자열을 추출하고 싶을때
//문자열.substr(시작인덱스, [글자수(생략가능)]) => 반환: 문자열
//substr()은 두번째 인수에 추출하고 싶은 글자수를 지정한다. 인덱스위치와 글자수를 지정하여 필요한 위치부터 원하는 길이만큼의 문자열을 추출함.

//const iindex = 'JavaScript';
const ah = iindex.substr(4, 6);
console.log(ah);
// es5문법. Deprecated

//34.지정문자열 변환하기
// 문자열을 다른 문자열로 바꿀때
// 문자열 내 불필요한 줄바꿈 코드를 <br>로 바꿀때
// 빈칸을 제거할 떄 사용.
// 대상문자열.replace(문자열1, 문자열2) : 문자열1을 문자열2로 바꾼다 => 반환: 문자열
// 대상문자열.replace(정규표현, 문자열) : 정규표현으로 문자열 바꾸기 => 반환: 문자열

const imgName = 'image1.png';

const img = imgName.replace('1.png', '2.png');
console.log(img);

const inputText = 'lolo\npopo';
console.log(inputText);
const input = inputText.replace('\n', '');
console.log(input);

const phoneNumber = '010-2939-4839';

const phone = phoneNumber.replace('-', '^');
console.log(phone);
//정규표현을 사용하여 g옵션을 지정하면
const phone1 = phoneNumber.replace(/-/g, '^');
console.log(phone1);
/// g옵션 -> global?? g옵션은 '' 안됨 //해야함


//35. 문자열나누기
//URL의 해시hash 데이터를 가져올때
//공백을 기준으로 문자열을 나눌때
// 문자열.split([기준문자(생략)], [최대분할수(생략)])
// 문자열.split([정규표현(생략)], [최대분할수(생략)])
//split()은 첫번째인수로 구분된 배열을 반환한다.

const myUrl = 'http://example.com/?id=123456789&name=Tiger&age=37';

const maiUrl = myUrl.split('&');
console.log(maiUrl);

// http://example.com/ ? id=123456789 & name=Tiger & age=37
const maUrl = myUrl.split(/&|\?/);
console.log(maUrl);

// const iindex = 'JavaScript';
const nnb = iindex.split('');
console.log(nnb);       // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
const nmm = iindex.split();
console.log(nmm);       // [ 'JavaScript' ]


//36.문자열합치기
// 따로입력받은 성과 이름결합하여 문자열 만들때
// 폴더명과 파일명 결합하여 파일주소를 문자열로 만들때
// 문자열1 + 문자열2 + 문자열3 + .... : 문자열1에 문자열2와 문자열3을 결합
//  `${문자열1}${문자열2}${문자열3}` : 문자열1,2,3을 결합

const country = 'Korea, ';
const states = 'Seoul';
console.log( country + states );



/*
 *********************** 22.11.22.tue (083~ ch3.계속)
 */


//37.문자열의 대소문자 변환하기
//소문자를 대문자로 변환
//서버에서 반환된 대문자 데이터를 소문자로 변환할때
// 문자열.toLowerCase() : 문자열을 소문자로 변환 : 문자열반환
// 문자열.toUpperCase() : 문자열을 대문자로 변환 : 문자열반환

const teest = 'TeSt';

const test1 = teest.toLowerCase();
console.log(test1);

const hisName = 'john smith';

const test2 = hisName.toUpperCase();
console.log(test2);

//38.문자열과 식 함께 다루기
//여러 문자열을 다루고 싶을때
//문자열 내 변수를 다루고 싶을 때
// 문자열 + 문자열 + ... : 문자열 결합
// `${문자열1}${문자열2}${문자열3}` : 문자열 결합, 변수의 이용
//자바스크립트에서는 ' + ' 연산자를 문자열, 변수와 함께 사용할 수 있다.

const userName = `고양이`;

const tag = '<div class="container">' + '안녕하세요' + userName + '님' + '</div>';
console.log(tag);

const userName2 = '고양2';

const tag1 = `<div class="constainer">안녕하세요 ${userName2} 님</div>`;
console.log(tag1);

//39.정규표현식사용하기

// if (/iphone|ipod|iPad/.test(navigator.userAgent)) {
//     alert('iOS');
// }
//
// if (
//     navigator.userAgent.includes('iPhone') ||
//     navigator.userAgent.includes('iPod') ||
//     navigator.userAgent.includes('iPad')
// ) {
//     alert('iOS');
// }

