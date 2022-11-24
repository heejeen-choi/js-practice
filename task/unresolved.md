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

### 4. practiceCh3Ch4/ `line213`
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

(3) **React Router Api Library**
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
