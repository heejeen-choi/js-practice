/*
 ********************************************************************* 22.11.26.sat (p448~ 464)
 */



//219.지정시간후 작업실행하기
// setTimeout(함수, 밀리초) : 지정시간에 함수호출
//  자바스크립트는 코드를 위에서부터 순서대로 실행하지만, setTimeout()을 사용해 실행 타이밍과 순서의 지정이 가능하다. setTimeout()은 한번만 호출되며, 첫번째 인수는 함수, 두번째 인수는 지연시간을 밀리초(1/1000초) 단위로 전달.

setTimeout(timer1, 1000);
timer1 = () => {
    //처리작업
}

//setTimeout()의 첫번째 인수에는 익명함수 Anonymous Function을 사용한다.
setTimeout( () => {
    //처리작업
    console.log(this);
}, 1000);

//setTimeout()과 function()을 함께 사용하면 this의 스코프가 변하는 경우 의도하지 않은 곳을 참조하는 경우가 발생한다. 해당 문제를 피하기 위해서는 화살표함수 Arrow Function을 사용하는 것이 좋다.

setTimeout(() => {
    //처리작업
    console.log(this);
}, 1000);


console.log('실행시작시간', new Date().toLocaleTimeString());
setTimeout(() => {
    console.log('setTimeout 실행 후 시간', new Date().toLocaleTimeString());
}, 1000);
// * 콘솔에 찍히는것은,
// 실행시작시간 오후 8:08:43
// setTimeout 실행 후 시간 오후 8:08:44



//220.지정시간 후 작업실행 해제하기.
//  clearTimeout(타이머ID) : setTimeout()호출해제
//  해제하고 싶은 타이밍에 맞춰 setTimeout()의 반환값인 타이머ID(숫자타입)을 clearTimeout()의 인수로 전달하면 지정한 함수의 호출이 해제된다.

const timerId = setTimeout(timer1, 1000);
timer1 = () => {
    //처리작업
}
clearTimeout(timerId);



//221.시간주기 작업하기
// setInterval(함수, 밀리초) : 지정시간 간격으로 연속 함수 호출
//  setInterval()을 사용해 지정 밀리초 간격으로 함수를 실행할 수 있다. setTimeout()은 함수를 한번만 호출하지만, setInterval()은 지정시간 간격으로 연속 실행한다.
setInterval(timer1, 1000);  //1000밀리초 간격으로 실행
timer1 = () => {
    //처리작업
}

//첫번째 인수는 함수, 두번째인수는 반복간격(밀리초단위)을 전달하며, 함수는 익명함수AnonymousFunction를 사용할 수 있다. 처리 중 this의 스코프가 변하는 문제해결을 위해 화살표함수ArrowFunction를 사용하는 것이 좋다.
setInterval(() => {
    //처리작업
}, 1000); //1000밀리초 간격으로 실행

//현재시간표시하기.
//console.log()로 시간을 표시함. setInterval()을 사용해 호출하는 코드는 실행시작 후 1초 간격으로 처리됨.
console.log('실행시작시간', new Date().toLocaleTimeString());
setInterval(() => {
    console.log('setInterval 실행시간', new Date().toLocaleTimeString());
}, 1000);



//222.시간주기 작업 해제하기
//  setInterval() 처리를 해제하기
//  clearInterval(IntervalID) : setInterval() 호출해제
//  setInterval()의 숫자타입 반환값을 보관한뒤 해제하고 싶은 타이밍에 맞춰 clearInterval()의 인수로 전달한다.
const intervalId = setInterval(timer1, 1000);
timer1 = () => {
    //처리작업
}
clearInterval(intervalId);

//1초간격의 반복실행을 3회만 호출하고 싶을 때
const intervalId = setInterval(timer1, 1000);
let count = 0;
timer1 = () => {
    count += 1;
    console.log(count, new Date().toLocaleTimeString());
    if (count === 3) {
        clearInterval(intervalId);
    }
}



//223.비동기화 Promise 사용하기
//비동기 처리를 다룰때
//  new Promise(함수) : 의미=Promise생성 : 반환=Promise인스턴스
//  Promise인스턴스.then(함수) : 의미=성공시 콜백함수 호출 : 반환=Promise
//비동기처리 작업기능을 하는 Promise 객체를 사용하면 작업도 용이해지고, 코드 가독성도 높아진다. fetch()를 시작으로 브라우저의 표준기능에도 Promise 사용. await async
//Promise 생성자의 인수는 비동기 처리 작업을 하는 함수를 지정하며, 함수 내부에서 비동기 처리 완료 메소드인 resolve()를 호출한다. Promise 인스턴스의 then()을 사용해 resolve() 실행 후의 작업을 처리한다.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        //resolve() 호출시 Promise 처리완료
        resolve();
    }, 1000);
});
//then()으로 다음작업 처리
promise.then(() => {
    console.log('네,다음분');
});

//resolve()의 인수에는 임의의 값 지정이 가능. resolve()의 인수가 then() 내부처리에 사용되는 샘플
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('orange');
    }, 1000);
});
promise.then((value) => {
    console.log(value);
});



//224.Promise 성공,실패처리하기
//실패 가능성이 있는 비동기 작업을 처리할때
//  Promise 인스턴스.catch(함수) : 실패시 콜백함수 호출
//  promise로 실패한 작업을 처리하고 싶을때는 생성자 인수에 reject를 포함하는 함수를 지정한다. reject는 처리의 실패를 나타내는 작업을 할당하며, reject가 실행되면 catch()가 호출된다.

const promise = new Promise((resolve, reject) => {
    if (flag === true) {
        resolve('orange');
    } else {
        reject('apple');
    }
});
promise.then((value) => {
    console.log(value);
});
promise.catch((value) => {
    console.log(value)
});

//메소드체인으로 연결해서 나타내기
new Promise((resolve, reject) => {
    if (flag === true) {
        resolve('orange');
    } else {
        reject('apple');
    }
})
.then((value) => {
    console.log(value);
})
.catch((value) => {
    console.log(value);
})



//225.Promise 병렬처리하기
//비동기 처리 일괄시작 후 모든 처리가 끝나면 다음작업을 시작하려고 할때
//  Promise.all(배열) : 다수의 Promise 병렬실행
//Promise.all()을 사용하면 동시에 실행한 처리를 모두 끝내고 다음 작업을 시작하도록 지정할 수 있다.
//Promise 인스턴스를 포함한 배열을 생성하여 Promise.all()의 인수로 전달한다. 모든 처리가 끝난 뒤 then()으로 지정한 함수를 호출한다. 병렬 처리는 배열의 순서대로 작업이 완료되지는 않는다.

//배열작성
const arrFunc = [];
for (let i=0; i<5; i++) {
    const func = (resolve) => {
        console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString());
        //0~2초 지연
        const delayMsec = 2000 * Math.random();
        //지연처리
        setTimeout(() => {
            console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString());
            resolve();
        }, delayMsec);
    };
    //배열저장
    arrFunc.push(func);
}
console.log(arrFunc);
//함수를 포함한 배열을 Promise 배열로 변환
const arrPromise = arrFunc.map((func) => new Promise(func));
console.log(arrPromise);
//병렬처리실행
Promise.all(arrPromise).then(() => {
    console.log('모든작업완료');
});



//226.Promise직렬처리하기
//외부데이터를 가져와 후속처리작업에 사용할때
//처리가 끝난 데이터를 다음 작업에 이어서 사용하는 방법. 외부데이터를 가져와 다음 처리에 연결할때 유용하다. Promise를 사용하는 방법, 직렬처리에서 더 간단한 await,async

Promise.resolve()
.then(() => new Promise((resolve) => {
    setTimeout(() => {
        console.log('첫번째 Promise', new Date().toLocaleTimeString());
        resolve();
    }, 1000);
}))
.then(() => new Promise((resolve) => {
    setTimeout(() => {
        console.log('두번째 Promise', new Date().toLocaleTimeString());
        resolve();
    }, 1000);
}));

//await 과 async 를 사용해서 나타내기
start();
async function start() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('첫번째 Promise', new Date().toLocaleTimeString());
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('두번째 Promise', new Date().toLocaleTimeString());
            resolve();
        }, 1000);
    });
}



//227.Promise동적직렬 처리하기
//비동기 처리를 순서대로 시작 후 모든 처리가 완료될 때까지 대기할때
//Promise의 실행 여부를 미리 알 수 없을 때 동적으로 Promise의 수가 변하는 경우
//비동기 처리 실행의 함수를 배열에 보관하고, 루프문을 사용해 Promise와 await로 처리를 연결한다. Promise는 인스턴스화한 순간 함수가 실행되므로, 실행 직전까지 인스턴스화하지 않는 것이 핵심.
//루프문에서 await는 Promise의 완료를 기다리므로 배열에 보관된 비동기처리를 순서대로 실행한다.

//배열생성
const listFunctions = [];
//동적으로 함수추가
for (let i=0; i<5; i++) {
    //1초 후 처리하는 비동기함수 생성
    const func = (resolve) => {
        //setTimeout으로 지연작업 처리
        setTimeout(() => {
            console.log(`함수 ${i}가 완료되었습니다.`, new Date().toLocaleTimeString());
            resolve();  //Promise완료
        }, 1000);
    };
    //배열에 보관
    listFunctions.push(func);
}
//배열내용 출력
console.log(listFunctions);
execute();
async function execute() {
    //비동기처리 순서대로 실행
    for (let i=0; i<listFunctions.length; i++) {
        const func = listFunctions[i];
        await new Promis(func);
    }
}