/*
 ********************************************************************* 22.11.24.thu (p108~ 113)
 */

//54. 문자열 만들기
// 배열내 요소의 문자데이터를 결합할때
// 배열.join([결합문자열(생략)]) : 배열요소를 결합해 문자열 만들기 : 반환=문자열
// join()은 배열의 요소를 결합해 문자열로 출력한다. 결합하는 요소사이에 결합 문자열 지정이 가능, 생략하면 기본값인 콤마(,)가 들어감

const array1 = ['w', 2, 'dfs'];
console.log(array1.join());
console.log(array1.join('%'));

const array2 = ['d', 'e', 'p', 't'];
console.log(array2.join(''));

// {
//     link = () => undefined;
// }
// :
// {
//     link ? : () => void
// }
//
//
// type
// Item = {
//     text: string, link: any
// }
// type
// List = {
//     items: string[], description? : string
// }
//
// let a: Omit<Item & List, 'text'
// '>;
//
// {...
//     a
// }
//
// es6
//
// ts
//
//
// react
//
//
// if (props.link) {
//     ddd
// }

//55.배열요소 검색하기
//배열 데이터의 특정 요소를 확인할 때
// 배열.indexOf(검색데이터, [시작위치(생략)]) : 요소의 인덱스 위치 검색하기 : 반환=숫자
// 배열.lastIndexOf(검색데이터, [시작위치(생략)]) : 끝에서부터 요소 위치 검색 : 반환=숫자
// 배열.includes(검색데이터, [시작위치(생략)]) : 요소의 포함여부 확인하기 : 반환=진릿값
// 배열 내 요소 데이터의 검색이 가능. indexOf()는 배열 내에서 검색 데이터가 처음 발견되는 위치(인덱스)를 반환하고, lastIndexOf()는 마지막 위치(인덱스)를 반환한다. 인덱스는 0부터 시작한다. 예를 들어, 다섯번째인덱스는

const array3 = ['mango', 'apple', 'mandarine'];
console.log(array3.indexOf('apple'));

// const array4: number[] | string | null =;//[2,4,6,2,6,3,1,8,0];
// console.log(array4.lastIndexOf(0, 5));
// console.log(array4.includes(7));


//56.조건을 만족하는 배열요소 가져오기
//유저정보가 담긴 배열에서 ID를 기준으로 정보를 가져올때

const array5 = ['gray', 'white', 'brown', 'gold', 'metal'];
const targetUser = array5.find((value) => value === 'gray');
console.log(targetUser);

const array6 = ['gray', 'white', 'brown', 'gold', 'metal'];
const targetIndex = array6.findIndex((e) => e === 'metal');
console.log(targetIndex);


//57.배열요소 역순 정렬하기
//배열.reverse() : 배열을 역순으로 정렬 : 반환=배열

const array7 = [1, 3, 5];
const array8 = array7.reverse();
console.log(array8);

const array9 = ['마', '치', '정', '검']
const array10 = array9.reverse();
console.log(array10);


//58.배열요소 정렬방법 지정하기
//배열요소 오름차순/내림차순 정렬할때
// 배열.sort([비교합수(생략)]) : 배열을 비교함수로 정렬하기 : 반환=배열
//sort()는 비교함수로 배열을 정렬한다. 비교함수는 두 인수의 크기를 비교하여 정렬 순서를 결정한다.

const array11 = [1, 2, 3, 3, 4, 5, 6];
const array12 = array11.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return -1;
    }
});
console.log(array12);


//59.객체를 포하하는 배열정리
//오름차순,내림차순으로 정렬

const userColor = [
    {
        id: 101,
        name: 'darkPink'
    },
    {
        id: 102,
        name: 'seaBlue'
    },
    {
        id: 103,
        name: 'burnt'
    },
    {
        id: 104,
        name: 'umber'
    }
];


//60.배열요소 알파벳순 정렬
// 문자열1.localeCompare(문자열2) : 문자열1과 문자열2 비교 : 반환=숫자
//배열 sort()에서 문자열의 순서비교 = localeCompare()를 사용한다. 대소문자 구분없이 정렬 가능


const arr1 = ['grape', 'Orange', 'apple'];
const arr2 = arr1.sort();
console.log(arr2);
const arr3 = arr1.sort((a, b) => a.localeCompare(b));
console.log(arr3);


//61.배열요소 추출하여 새배열 만들기
//배열.map(콜백함수) : 콜백함수로 새로운 배열 생성 : 반환=배열
//map()은 배열에서 요소를 추출하여 새로운 배열을 생성한다. 또한, 배열요소를 하나씩 처리하기 때문에 배열의 루프처리 작업에도 활용되며, 각 요소는 인수로 전달된 콜백함수에 의해 처리된다. map()은 forEach()와 비슷하지만 반환값이 존재하낟.
//([요소(생략)], [인덱스(생략)], [기존배열(생략)]) => 변경후요소 : 의미= 요소를 받아 변경 후 반화

const idList = [4, 9, 10];
const userIdList = idList.map((value) => `userid_${value}`);
console.log(userIdList);

//콜백함수는 요소데이터 이외에도 인덱스와 기존배열을 인수로 받을 수 있다.
const idList1 = [5, 6, 23];
const userIdList1 = idList1.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList1);

const apiResponseData = [
    {
        id: 10,
        name: 'Pink'
    },
    {
        id: 20,
        name: 'green'
    },
    {
        id: 30,
        name: 'cream'
    }
];
const idList2 = apiResponseData.map((v) => v.id);
console.log(idList2);


//62.조건을 만족하는 배열요소 추출하여 새배열 만들기
//배열.filter(콜백함수) : 콜백함수 조건을 만족하는 데이터의 배열 생성 : 반환=배열
//([요소(생략)], [인덱스(생략)], [기존배열(생략)]) => 진릿값 : 요소를 받아 진위 반환

//filter()는 콜백함수 조건에 만족하는 요소들을 새로운 배열로 생성한다.
const newArray = [10, 20, 30, 40].filter((v) => v >= 30);
console.log(newArray);

//콜백함수는 요소가 30 이상인지 확인한다. 30이상이면 true를 반환하고 새로운 배열의 요소가 된다.
const newArray1 = [10, 20, 30, 40].filter((v) => {
    return v >= 30;
});
console.log(newArray1);


//63. 배열요소하나로 정리하기
//배열요소를 계산하여 하나의 값으로 만들고 싶을때
//배열.reduce(콜백함수,[초기화(생략)]) : 요소(좌에서 우)를 처리하여 하나의 값 생성 : 반환=임의지정값
//배열.reduceRight(콜백함수,[초기화(생략)]) : 요소(우에서 좌)를 처리하여 하나의 값 생성 : 반환=임의지정값

const priceList = [100, 500, 900];
const sum = priceList.reduce((previous, current) => {
    return previous + current;
});
console.log(sum);

//for문사용
const priceList1 = [100, 500, 900];
let sum1 = 0;
for (const price of priceList) {
    sum1 += price;
}
console.log(sum1);

//2차배열을 1차배열로 만드는 플래트닝Flattening
const array14 = [['brown', 'blue', 'gray'], ['purple', 'gold', 'beige']];
const flattenedArray = array14.reduce((pre, curr) => {
    return pre.concat(curr);
});
console.log(flattenedArray);

//reduce()는 요소의 처리작업이 좌에서 우로, reduceRight()는 우에서 좌로
const array19 = ['purple', 'gold', 'beige'];
const members = array19.reduce((pre, curr) => {
    return `${pre}와 ${curr}`;
});
console.log(members);


//64.유사배열객체를 배열로 변환하기
//문자열과 유사배열ArrayLike를 배열로 변환할때
//반복가능Iterable한 객체를 배열로 변환할때
//[...변환대상] : 배열로 변환
//스프레드Spread연산자(...)를 사용하면 유사배열객체를 배열로 변환가능하다.
// 유사배열의 특징 (1)length 속성으로 크기를 확인할 수 있다.
//             (2)인덱스가 부여된 요소를 가진다.

const myString = '검정치마해랑사을신당은나';
console.log(myString.length);
console.log(myString[2]);
console.log([...myString]);

//유사배열은 Array.from()을 사용한 변환도가능.
//Array.from(변환대상, [콜백함수(생략)]) : 의미=배열로변환 : 반환=배열
// (요소, 인덱스, 기존배열) => {}
//Array.from()도 스프레드연산자(...)와 같이 유사배열ArrayLike를 배열로 변환가능하다. 또한, 콜백함수를 지정해 map()메소드와 같이 새로운 배열을 생성할 수도 있다.

const myStringer = '검정치마해랑사을신당은 나';
console.log(Array.from(myStringer));

const newArray8 = Array.from(myString, (charac) => `${charac}!!`);
console.log(newArray8);


//65.요소의 개별 변수에 분할대입하기
//배열의 요소를 변경할때
//[변수1,2,3] = [값1,2,3] : 각 변수에 값을 대입

// let values = [a, b, c];
// let numbers = [1, 2, 3];
// values == numbers;
// console.log(values);
[a, b, c] = [1, 2, 3];
console.log(a);
console.log(a, b, c);

//분할대입은 다음과 같이 배열 내 값의 변경이나 요소의 위치를 변경할수있다.
const animals = ['fox', 'whale', 'squirrel', 'elephent'];
[animals[0], animals[1]] = [animals[3], animals[2]];
console.log(animals);


//66.배열섞기(셔플)
//배열을 바르고 고르게 섞
//피셔예이츠 알고리즘

//shuffle
const ar1 = [1, 2, 3, 4, 5];
const arLength = ar1.length;
for (let i = arLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [ar1[i], ar1[randomIndex]] = [ar1[randomIndex], ar1[i]];
}
console.log(ar1);

// const array09 = ['fox', 1, 'whale', 9, 'squirrel', 13, 'elephent'];
// const shuffled1 = shuffleArray(array09);
// console.log(shuffled1);


//67.다양한 데이터타입을 가진 객체 사용하기
//다양한 데이터를 하나의 객체로 만들때
//연관배열을 사용할때
//연관배열(Associative Array): 자료구조의 하나. 키하나와 값하나가 연관되어 있으며 키를 통해 연관되는 값을 얻을수있다. 연상배열이나 결합형배열, 맵(Map), 사전(Dictionary)로 부르기도함.

//객체Object는 자바스크립트의 기본데이터타입 중 하나. 여러가지 속성Property를 가질수있다. 속성은 키와 값의 조합으로 만들어진다.
const person = {
    id: 11,
    name: 'turtle',
    age: 39
};
console.log(person)
// * 속성 Property : 'id:11', 'name:'turtle'', 'age:39'
// * 키 key : id, name, age
// * 값 value : 11, 'turtle', 39

// 속성의 데이터타입도 제한이 없다. (1)숫자, (2)문자열, (3)배열, (4)객체, (5)함수를 모두 속성으로 사용할 수 있다.


//68.객체선언, 수정, 확인하기
// * {} : 객체를 초기화
// * {키1: 값1, 키2: 값2, ...} : 객체를 초기화
// * 객체[] : 값을 가져오기
// * 객체.키 : 값을 가져오기
// * 객체[키]=값 : 값을 변경하기
// * 객체.키 = 값 : 값을 변경하기

const person1 = {
    id: 54450011,
    name: 'Take01',
    age: 39
};
const object = person1;
// person1 === object
// true
//
// 1 === 1
//
// const object = {...person1};
//
// const {age, ...object} = person1;
//
//
// person1 === object
// false
//
// const a = [1, 2, 3];
// const b = [...a];
//
// Object.console.log(person1.id);
console.log(person1['name']);
console.log(person1.name);
person1.id = 259455;
person1.name = 'Reduce23';
console.log(person1.id);
console.log(person1.name);
console.log(person1);
person1 === object;
console.log(object);

object.id = person1.id;

const response1 = {
    result: true,
    list: [
        {
            id: '233AA',
            name: 'Alive-2343',
            age: 355
        },
        {
            id: '634FS',
            name: 'DeTsk-54',
            age: 46
        }
    ]
};
console.log(response1.list[0].name);



/*
 ********************************************************************* 22.11.25.fri (p145~ 155)
 */


//객체의 속성은 데이터 타입이 다양한 배열과객체 등을 다차원으로 저장할 수 있다. 다차원이라도 '[키]'와 .'키'를 사용해 불러오기와 변경이 가능하다.
//함수 타입도 저장할 수 있다.
const myClass = {
    method1: function () {
        console.log('method1Execution');
    },
    method2: () => {
        console.log('method2Execution');
    }
};
myClass.method2();


//69.객체복사하기
//데이터복사할때
// { ...복사대상객체 } : 의미=대상객체의 각요소를 분할대입(복사)
// Object.assign((), 복사대상객체) : 반환=객체

const object1 = {
    result: true,
    members: [
        {
            id: 1,
            name: 'sfsd'
        },
        {
            id: 2,
            name: 'sgeds'
        },
        {
            id: 3,
            mame: 'iegg'
        }
    ]
};
const copiedObject1 = Object.assign({}, object1);
console.log(copiedObject1);

//spread연산자(...)를 사용하면 코드가 간략해짐.
const object2 = {
    result: true,
    members: [
        {
            id: 393,
            name: 'sdaf-df'
        },
        {
            id: 1324,
            name: 'fie-fg'
        },
        {
            id: 949,
            name: 'idd-dfb'
        }
    ]
};
const copiedObject2 = {...object2};
console.log(copiedObject2);
// Object.assign()과 spread연산자'...'를 사용하면 얕은 복사가 이루어진다.
// 얕은복사 : 복사 전 데이터와 복사 후의 데이터가 같은 곳을 참조하는 것 => 복사 전의 데이터를 수정하면 복사 후의 데이터에도 영향을 미친다.

//얕은 복사의 특징 ↓
const object3 = {
    id: 78,
    members: ['boobie', 'oOowo', 'gakuwa']
};
const copiedObject3 = {...object3};
object3.members[1] = 'danaka-sang';
object3.id = 9087;
console.log(copiedObject3);

// const copiedObject3 = {id, ...object3};
// console.log(copiedObject3);

// const object = {...person1};
//
// const {age, ...object} = person1;

const personInfo = {
    id: 11,
    name: 'ABBA',
    age: 23
};
console.log(personInfo);
// const objectPerson = {...personInfo};
// console.log(objectPerson);
personInfo.id = 3534;
const objectPerson = {...personInfo};
console.log(personInfo);
console.log(objectPerson);
// const objectPerson3 = {id, ...personInfo};
// console.log(objectPerson3);


//70.객체속성Property 확인하기
//Api Response의 특정 데이터를 확인할때
//지정한 데이터가 객체에 존재하지 않아서 처리작업을 취소할때
//객체.hasOwnProperty(키) : 의미=데이터유무 확인 : 반환=진릿값
//키 in 객체 : 데이터의 유무여부 반환
const userData = {
    id: 1,
    name: 'dd',
    age: 43
};
console.log(userData.hasOwnProperty('id'));         //true
console.log(userData.hasOwnProperty('address'));    //false
console.log('id' in userData);                        //true
console.log(userData.hasOwnProperty('id', 'name'));     //true
console.log(userData.hasOwnProperty('id' && 'address'));    //false
console.log(userData.hasOwnProperty('address' && 'id'));    //true
console.log(userData.hasOwnProperty('address' || 'name'));  //false
console.log(userData.hasOwnProperty('id' || 'favMeal')); //true

//객체의 데이터를 가져와 undefined나 null의 여부를 확인하기
const userData1 = {
    id: 34,
    age: 834,
    fav: 'inMyHome'
};
console.log(userData.id != null);    //true
console.log(userData.address != null);  //false
console.log(userData['id'] != null);   //true
console.log(userData.id === undefined);  //false


//70.객체요소값 확인하기
//Object.keys(객체) : 객체 각 키의 배열 : 반환=배열
//Object.values(객체) : 객체 각 데이터의 배열 : 반환=배열
//Object.entries(객체) : 객체 각 속성(Key,Value)의 배열 : 반환=배열

//객체 각 속성Property의 루프처리방법
const userData2 = {
    id: 1,
    name: 'dd',
    age: 43
};
console.log(Object.keys(userData2));
console.log(Object.values(userData2));
console.log(Object.entries(userData2));


//71.객체요소 분할대입하기(비구조화할당)
//객체의 데이터를 정리하여 대입할때
//객체의 일부 데이터를 추출하여 사용할때
//{변수1,변수2,...}=객체 : 의미=객체의 데이터를 각 변수에 대입
//객체에서 변수1, 변수2같은 이름의 키 데이터를 추출하여 변수에 대입하는 분할 대입

const userData3 = {
    id: 1,
    name: 'dd',
    age: 43,
    birth: ''
};
const { id, name, age, birth, address } = userData3;
console.log(id);
console.log(name);
console.log(age);
console.log(birth);  // 아무것도 안찍힘
console.log(address);   //undefined
const { name: myName } = userData3;
console.log(myName);    //dd
console.log(Object.keys(userData3));  // ['id', 'name', 'age', 'birth']
console.log(userData3.myName);   // undefined


//73.객체수정 제한하기
//객체의 깊은 계층까지 수정을 제한하고 싶을때
//Object.freeze(객체) : 객체의 수정을 제한 : 반환=객체
//Object.isFrozen(객체) : 객체의 수정 제한 확인 : 반환=진릿값
//객체는 const도 속성의 추가,삭제,변경이 가능하다.

const object11 = {
    id: 10,
    name: 'dsf'
};
object11.id = 12;
object11.address = 'mars';
console.log(object11);

'use strict';
const object12 = {
    id: 343,
    name: 'ADF'
};
Object.id = 12;
console.log(object12);

//객체수정을 제한하는 다른 방법
//객체의 수정을 제한하는 다른 메소드는
// Object.seal(), Object.preventExtensions() 가 있다.