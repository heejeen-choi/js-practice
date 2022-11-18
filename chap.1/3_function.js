function hello(name) {
    console.log('Hello '.concat(name));
    console.log(`Hello ${name}`);
}

hello('Groot');

// 80 =a, 60=b , c

function getGrade(score) {
    if (score >= 80) {
        console.log('A')
    } else if (score >= 60) {
        console.log('B')
    } else {
        console.log('C')
    }
}

getGrade(20);

/*
숫자 2개를 받아서 합한 값을 리턴하는 함수
숫자 2개를 받아서 차이 값을 리턴하는 함수
숫자 2개를 받아서 곱한 값을 리턴하는 함수
숫자 2개를 받아서 나눈 값을 리턴하는 함수

숫자 2개르 받아서 4가지 사칙연산의 결과를 배열로 리턴하는 함수


 */

function getNumber(a, b) {
    return a+b
}

function getNumber1(a, b) {
    return a-b
}

function getNumber2(a, b) {
    return a*b
}

function getNumber3(a, b) {
    return a/b
}

console.log(getNumber(3, 5));
console.log(getNumber1(5, 3));
console.log(getNumber2(3, 5));
console.log(getNumber3(10, 2));

function arrNumber(a, b) {
    return [getNumber(a, b), getNumber1(a, b), getNumber2(a, b), getNumber3(a, b)];
}

console.log(arrNumber(10, 2));

/////////

const addNumber = (a, b) => {
    return a+b
}
const subNumber = (a, b) => {
    return a-b
}
const multiNumber = (a, b) => {
    return a*b
}
const divNumber = (a, b) => {
    return a/b
}

console.log(addNumber(3, 5));
console.log(subNumber(5, 3));
console.log(multiNumber(3, 5));
console.log(divNumber(10, 2));

const arNumber = (a, b) => {
    return [addNumber(a, b), subNumber(a, b), multiNumber(a, b), divNumber(a, b)];
}

console.log(arNumber(10, 2));

/////////

const color = (a, b) => {
    return a+b
}
console.log(color('yello+','blue'));
console.log(`Green = ${color('yello+','blue')}`);