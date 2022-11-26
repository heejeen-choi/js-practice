## 해결안된것들


### ~~1. page 078~~ → '정규식'
````
  const myUrl = 'http://example.com/?id=123456789&name=Tiger&age=37';
````
````
반환값1 : [ 'http://example.com/?id=123456789', 'name=Tiger', 'age=37' ]

const maiUrl = myUrl.split('&');
console.log(maiUrl);
````
````
반환값2 : [ 'http://example.com/', 'id=123456789', 'name=Tiger', 'age=37' ]
const maUrl = myUrl.split(/&|\?/);
console.log(maUrl);
````

=> 두번째 반환값의 const maUrl 에서 `split의 인수` 이해안됨.  **/&|\?/**

### ~~2. practiceCh3Ch4/ `line169~172`~~ → findIndex 보다는 filter()쓴다.
````
//findIndex() : 조건에 맞는 첫번째값의 index값을 리턴

const numbers4 = [1, 2, 3, 0, 4, 9, 10]
const sfe = numbers4.findIndex(numbers4 => numbers4 < 4);
console.log(sfe);  // 이거 왜 콘솔 안찍히는지?????????
````
### ~~3. practiceCh3Ch4/ `line174~179`~~ → '정규식'
````
const transports = ['car', 'train', 'bike', 'bus']
const igi = transports.findIndex(transport => /^b/.test(transport));
 (1)'b'로 시작하는 : /^b/ <- 이 수식?말고 다른것은?? 이거 지금도 통용되는 것 맞는지?
 (2) .test() <- 이 함수 뭔지?
 (3) 조건에 맞는 첫번째값 뿐만 아니라 모든 값의 index 또는 value값을 리턴하려면 어떻게 해야하는지??c
console.log(igi);
````

### ~~4. practiceCh3Ch4/ `line213`~~ → 'React Router Library'찾아보기_(3)
    - push()가 쓰인 Aj프로젝트 소스코드 3가지 예시 확인 (push는 배열에 요소를 추가하는 메소드인데?)
````
** push (AJ MSA Project)

(1)
const menuItems = (menues: Menu[]): Menu[] => {
    const items: Menu[] = [];
    menus.forEach(menu => {
        items.push(menu);
        if (menu.children) {
            items.push(...menuItems(menu.children));
        }
    });
    return items;
}

(2)
const dates: { date: any, events: any }[] = [];
for (let i=0; i<42; i++) {
    const date = new Date(startingDate);
    dates.push({date: date, events: findEventsForDate(events, date)});
    startingDate.setDate(startingDate.getDate() + 1);
}

(3) 
const routeToForm = () => {
    router.push(
        `/activity/form`,
        `/activity/form`
    )
}
````

### 5. chap.3/54_array `line295`
````
person1의 배열을 object에 넣어서
console.log(object) 했을때 
{ id: 259455, name: 'Reduce23', age: 39 } 이렇게 나오려면 어떻게?
````

### 6. chap.3/54_array_ ask SB
```
(1)
const persons = [{id: 12, name: 'hj'}, {id: 24, name: 'jh'}];
const copiedPersons = {...persons};
console.log(copiedPersons);    // {id: 12, name: 'hj'}, {id: 24, name: 'jh'}
const copiedPersons = {id, ...persons};
console.log(copiedPersons);    // 0: {id: 12, name: 'hj'}, 1:{id: 24, name: 'jh'}, id: 1
console.log(persons);      // 0: {id: 12, name: 'hj'}, 1:{id: 24, name: 'jh'}, length: 2
```
```
(2)
const personInfo = {
    id: 11,
    name: 'ABBA',
    age: 23
};
console.log(personInfo);    // { id: 11, name: 'ABBA', age: 23 }
personInfo.id = 3534;
const objectPerson = {...personInfo};
console.log(personInfo);      // { id: 3534, name: 'ABBA', age: 23 }
console.log(objectPerson);    // { id: 3534, name: 'ABBA', age: 23 }
const objectPerson3 = {id, ...personInfo};
console.log(objectPerson3);     //ReferenceError: id is not defined.
```
![img_1.png](img_1.png)
![img_1.png](./task/img_1.png)

### 7. 
```
//함수의 인수 역시 원시타입은 '값', 객체타입은 '참조'를 전달.
//함수에 원시타입의 데이터를 전달하는 코드를 확인해보자. 함수 내 처리결과는 변수 t에 영향주지 않음.

myFunction = (x) => {
    x += 2;             //(1)전달받은 파라미터에 2를 더하는 함수
};
let t = 10;             //(2)변수 t에 10을 대입
myFunction(t);          //(3)myFunction에 t를 전달, 복사된 데이터 10을 함수에 전달.
console.log(t);         //(4)10이 출력된다. '2가 더해진 12가 아님'
```
```
//함수의 인수 역시 원시타입은 '값', 객체타입은 '참조'를 전달.
//함수에 원시타입의 데이터를 전달하는 코드를 확인해보자. 함수 내 처리결과는 변수 t에 영향주지 않음.

myFunction = (x) => {
    x += 2;             //(1)전달받은 파라미터에 2를 더하는 함수
};
let t = 10;             //(2)변수 t에 10을 대입
myFunction(t);          //(3)myFunction에 t를 전달, 복사된 데이터 10을 함수에 전달.
console.log(t);         //(4)10이 출력된다. '2가 더해진 12가 아님' 
```
```
//함수에 객체 타입의 데이터를 전달하는 코드.
//함수 내 처리결과는 변수 a에 영향을 준다. 함수의 파라미터를 다룰때는 데이터의 타입을 확인하여 값, 참조의 전달을 적절히 사용하도록하자.

myFunc = (x) => {
    x[0] = 100;         //(1)전달받은 배열의 첫번째 요소에 100을 대입하는 함수
}
let g = [1,2,3];        //(2)변수 g에 [1,2,3]을 대입
myFunc(g);              //(3)myFunc()에 g를 전달. 배열데이터 [1,2,3]메모리의 위치를 함수로 전달.
console.log(g);         //(4)[100,2,3]출력. '[1,2,3]이 아님'
```

### 8. 
- chap6 / p203 윈도우사이즈 확인하기 => ??


