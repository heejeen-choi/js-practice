/*
 ********************************************************************* 22.11.27.sun (p502~ )
 */



//244.localStorage 사용하기
//데이터를 브라우저에 영구 보존할때
// localStorage.setItem('myParam', data) : localStorage에 저장
// localStorage.getItem('myParm') : localStorage에서 불러오기 : 반환=문자열
//localStorage는 브라우저에 데이터를 간단하게 저장할 수 있다. window 객체에 localStorage 객체가 있으므로 위치에 상관없이 사용할 수 있으며, localStorage에 저장된 데이터는 기간 제한이 없다.
//setItem()을 사용해 데이터를 저장하며, 첫번째 인수는 키, 두번째인수는 데이터를 저장한다. 문자열,숫자,진리값,객체,배열 등 다양한 데이터타입을 사용할수있다. getItem()을 사용해 저장된 데이터를 불러오며, 저장시 사용한 키와 동일한 값을 인수로 전달한다.


//245.Storage API 데이터 삭제하기
//Storage 데이터를 삭제하고 싶을때
// localStorage.removeItem(키) : localStorage 해당 키 삭제
// localStorage.clear() : localStorage 데이터 삭제


btn.addEventListener('click', () => {
    const data = input.value;
    localStorage.setItem('mykey1', data);
    localStorage.setItem('mykey1', data);
});
btnRemove.addEventListener('click', () => {
    localStorage.removeItem('mykey1');
});
btnClear.addEventListener('click', () => {
    localStorage.clear();
});



//246.쿠키로 로컬데이터 사용하기
//쿠키에 데이터를 저장할때
// document.cookie : 의미=쿠키참조 : 타입=문자열
//쿠키는 예전부터 웹데이터를 저장하거나 세션관리에 사용되어왔다. localStorage는 다양한 데이터 저장이 가능한 것이 특징이지만, 쿠키는 1차원의 문자열만 저장할 수 있다. 쿠키의 값은 클라이언트 쪽에서도 사용하지만, 서버도 불러오기와 값 변경 등 데이터를 공유할수있다. 속성은 1차원 데이터만 저장이 가능하므로 복잡한 데이터의 저장은 주의해야한다. 쿠키의 값은 '=' 또는 ';' 등의 특수 기호를 사용하며, 한글은 '%82%A0'와 같은 형식으로 인코딩되므로 쿠키값을 불러오기 위해서는 디코딩이 필요하다.
const btnRead = document.querySelector('.btnRead');
const btnSave = document.querySelector('.btnSave');

btnSave.addEventListener('click', () => {
    document.cookie = 'id=1';
    document.cookie = 'age=30';
    document.cookie = `name=${encodeURIComponent('lion')}`;
});
btnRead.addEventListener('click', () => {
    alert(document.cookie);
});
// * 쿠키의 특징
// (1) 브라우저가 자동으로 웹서버에 전송
// (2) 유효기간 설정 가능
// (3) 미삭제 시 지속보관
// (4) 도메인 단위로 존재, 같은 도메인이라도 http, https는 다른영역



//247.쿠키데이터 읽어오기
//쿠키값을 참조하고 싶을때
// document.cookie값을 불러와도 키와 값이 각각 문자열로 결합되어 있어 자바스크립트에서의 사용이 어렵다. 이럴때는 문자열을 연관배열로 분해하면 편리하게 사용할수있다.
// document.cookie 문자열의 ;과 =을 분리하여 연관 배열의 객체로 변환하는 코드를 확인해보자. 쿠키의 값은 모두 문자열이므로 주의하자.
btnRead.addEventListener('click', () => {
    const obj = convertCookieToObject(document.cookie);
    console.log(obj);
    document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '   ');
});
/**
 * 쿠키를 객체로변환
 * @param cookies 쿠키문자열
 * @return 연관배열
 */
convertCookieToObject = (cookie) => {
    const cookieItems = cookies.split(';');
    const obj = {};

    //chap3. line70
    // (1) 배열.forEach(콜백함수) : 배열의 요소 데이터 콜백함수로 실행
    //([요소(생략)], [인덱스(생략)], [기존배열(생략)]) => {} : 요소, 인덱스, 기존배열을 사용해서 처리
    // 요소 value | 인덱스 index | 기존배열 array
    //forEach: 루프처리
    cookieItems.forEach((item) => {
        // '='으로 분리
        const elem = item.split('=');

        // 키 가져오기
        //chap.2 line554
        //28.문자열의 공백 처리하기 (trim)
        //문자열 양단의 공백제거 : 문자열.trim()
        // 'trimming' trim()은 양단의 공백을 제거한 문자열을 반환한다.
        //공백 = 스페이스,탭,줄바꿈문자를 의미. 양단아닌 문자열사이공백은 제거안됨.
        const key = elem[0].trim();

        //값가져오기
        const val = decodeURIComponent(elem[1]);

        //저장
        obj[key] = val;
    });
    return obj;
}