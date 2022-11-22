//Chapter 3. 데이터 다루기


/*
 *********************** 22.11.22.tue (p102 ~ )
 */


//45.배열 정의하기
//배열을 정의할 때
//배열 데이터의 값을 가져올 때
// [] : 배열정의
// 배열[인덱스] : 배열 요소 데이터의 값 가져오기
//배열은, JavaScript의 기본 데이터 타입 중 하나로, 다수의 문자열과 유저 데이터 등 복수의 데이터를 다룰 때 사용한다. [] 안에 데이터를 입력하며, 타입에 상관없이 사용가능.

const array1 = [];
console.log(array1);

const array2 = [0, 2, 8];
console.log(array2);

const array3 = ['gom', 'bear'];
console.log(array3);

const array4 = [1, 'gom', false];
console.log(array4);

//배열 내 다른 배열을 저장하거나 객체를 저장할 수도 있다.
const array5 = [[1,1,1], [2,2,2]];
console.log(array5);
const array6 = [
    {
        id: 1,
        name: 'gom'
    },
    {
        id: 2,
        name: 'bear'
    }
];
console.log(array6);
console.log(array6[0]);
console.log(array2[1]);
console.log(array3[0]);
console.log(array4[2]);

const array7 = new Array('gom', 'fox');
console.log(array7);
const array8 = new Array(10);
array8[0] ='oparator';
console.log(array8);

//46.배열길이 확인하기
//배열.length : 배열의 길이를 반환 : 숫자로 반환

const array11 = ['gom', 'pig', 'bear', 'fox'];
console.log(array11.length);
const array12 = [
    {
        id: 1,
        name: 'apple'
    },
    {
        id: 2,
        name: 'lemon'
    }
];
console.log(array12.length);

//47.배열요소 다루기(1)
//배열 요소의 데이터를 처리할때
//배열.forEach(콜백함수) : 배열의 요소 데이터 콜백함수로 실행
//([요소(생략)], [인덱스(생략)], [기존배열(생략)]) => {} : 요소, 인덱스, 기존배열을 사용해서 처리
// 요소 value | 인덱스 index | 기존배열 array

// Array<string>.forEach( callback fn:(value: string, index: number, array: string[]) => void, thisArg?: any ): void
// 여러 데이터를 다루는 배열은 루프처리, 반복처리 등 각 요소를 일괄적으로 처리하는 경우가 많다. forEach()는 주어진 callback함수를 사용해 배열의 요소를 순서대로 처리한다. 콜백함수는 해당요소데이터, 인덱스, 기존배열정보 를 가져온다. 콜백함수에서 인덱스와 기존배열정보는 생략가능.

const array13 = ['lotion', 'skin', 'cream'];
array13.forEach((value, index) => {
    console.log(index, value);
})

//forEach()는 for, for...of의 루프와 달리 map(), filter() 등의 반환값을 그대로 루프처리 할 수 있는 것이 특징이다.
// 루프처리 : 반복
const array14 = [1, 2, 3, 4, 5, 6, 7, 8]
    .filter((value) => value % 2 === 0)
    .forEach((value) => {
        console.log(value);
    });

const array15 = ['ggule', 'sneck', 'sqquerl', 'pet', 'in my room', 'flower']
.filter((value, index) => index % 2 === 0)
.forEach((value) => {
    console.log(value);
});

/// ******* 추가설명 (옛날꺼같음)
// 배열에서 특정 값을 찾아서 리턴하는 함수 find(), filter()

// arr.find(callback(element[, index[, array]])[, thisArg])

// 1. find() 함수는,
// 배열에서 특정 값을 찾는 조건을 callback() 함수를 통해 전달하여, 조건에 맞는 값 중 "첫번째 값을 리턴" 한다.
// 만약 배열에 조건을 만족하는 값이 없으면 undefined를 리턴한다.

// 2. 파라미터
// callback(element, index, array) 함수
// 조건을 비교할 callback()함수이고, 다음 3개의 파라미터가 전달된다.
// (1)callback 함수에서 사용자가 테스트할 조건을 정의하고, (2)만약 배열의 값이 조건에 부합하여 true를 리턴하면, (3)해당 배열의 값이 find()함수의 리턴값이 된다.(4)조건에 부합하는 값을 찾으면 그이후의 배열값은 테스트되지 않는다.
// * element : 현재 처리 중인 배열의 element
// * index : 현재 처리 중인 배열의 index (optional)
// * array : find()가 호출된 배열 (optional)

// 3. thisArg (optional)
// callback()을 실행할 때 this로 사용할 객체
// 리턴값
// callback 함수에 정의한 조건에 부합하는 배열의 첫번째 값을 리턴한다.
// 조건에 부합하는 배열값이 없으면 undefined 리턴
// ** 참조 : callback() 함수의 조건에 부합하는 배열의 첫번째 index 값을 알아내려면 findIndex() 함수를 사용.

const fruitStore = [
    {
        name: 'apple',
        price: 1000
    },
    {
        name: 'banana',
        price: 2000
    },
    {
        name: 'melon',
        price: 3000
    }
];

//isApple() 함수는 파라미터로 입력받은 객체(element)의 name이 'apple'이면 true를 리턴한다.
// const isApple = () => {
//     if (value.name === 'apple') {
//         return true;
//     }
// }

//find()함수에 isApple()이라는 콜백함수를 전달함.
//find()함수는 파라미터로 전달 된 callback 함수가 true를 리턴하면 해당 배열의 값을 리턴하고, 더이상 나머지 배열의 값은 callback 함수로 전달하지 않는다.
//결국, find() 함수는 callback 함수에 정의된 조건에 부합하는 배열의 첫번째 값을 리턴하는 것.
// const apple = fruitStore.find(isApple);

//map() : array 안의 배열들 호출하고 제공된 조건의 새로운 배열로 할당
const numbers1 = [1, 2, 3, 4]

const a = numbers1.map(value => value < 3)
console.log(a); //[true, true, false, false]

//filter() : array 안의 배열들을 호출하고 조건에 맞는 값들만 새로운 array로 할당
const numbers2 = [1, 2, 3, 4, 5]

const uyo = numbers2.filter(numbers2 => numbers2 < 4);
console.log(uyo); //[1, 2, 3]

//find() : 조건에 맞는 첫번째값을 찾아서 리턴
const numbers3 = [1, 2, 3, 4, 5, 6, 7]

const yer = numbers3.find(numbers3 => numbers3 > 4);
console.log(yer); // 5
const ewu = numbers3.find(numbers3 => numbers3 < 6);
console.log(ewu); // 1


//findIndex() : 조건에 맞는 첫번째값의 index값을 리턴
const numbers4 = [1, 2, 3, 0, 4, 9, 10]
const sfe = numbers4.findIndex(numbers4 => numbers4 < 4);
console.log(sfe);  // 이거 왜 콘솔 안찍히는지?????????

const transports = ['car', 'train', 'bike', 'bus']
const igi = transports.findIndex(transport => /^b/.test(transport));
// (1)'b'로 시작하는 : /^b/ <- 이 수식?말고 다른것은?? 이거 지금도 통용되는 것 맞는지?
// (2) .test() <- 이 함수 뭔지?
// (3) 조건에 맞는 첫번째값 뿐만 아니라 모든 값의 index 또는 value값을 리턴하려면 어떻게 해야하는지??c
console.log(igi);

