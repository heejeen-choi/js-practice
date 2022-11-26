/*
 ********************************************************************* 22.11.26.sat (p228~ )
 */



//113.이벤트처리 이해하기
//웹사이트는 클릭,탭,스크롤,화면불러오기,JSON 읽어오기 등 다양한 이벤트가 존재하며 자바스크립트는 클릭, 탭 등의 동작에 따른 이벤트처리가 가능하다. 이벤트 처리는 addEventListener()를 사용해 제어.

const button = document.querySelector('.button');
button.addEventListener('click', onClickButton);
onClickButton = () => {
    console.log('클릭이벤트가 발생하였습니다.');
}
//button요소는 클릭, 탭 등 다양한 이벤트가 발생하며 이와같이 이벤트를 발생시키는 객체를 '이벤트타깃'이라고한다. window, div요소, p요소 등도 이벤트타깃이다. 앞 코드의 경우 click이 이벤트이며, 이벤트는 유저조작 관련 등 다양한 종류가 존재한다. 타깃의 이벤트처리를 '이벤트리스너'라고 하면 모두 addEnentListener()와 관련이 있다.


//114.이벤트 추가하기
//이벤트타깃.addEventListener(이벤트명, 리스너, [옵션]) : 이벤트리스너설정
//이벤트정보가져오기 : 이벤트함수는 인수를 통해 이벤트 정보를 가져올수잇다.
button.addEventListener('click', (event) => {
    console.log(event);
});
//이벤트정보(이벤트객체)는 발생한 이벤트에 따라 MouseEvent나 KeyboardEvent 등 다양한 종류가 있다. 이벤트객체는 이벤트가 발생한 요소와 참조정보, 입력된 키 등의 정보를 포함한다. 발생한 요소는 target 속성을 이용해 확인할수있다.
button.addEventListener('click', (event) => {
    console.log(event.target);
});


//116.이벤트리스너삭제하기
//이벤트타깃.removeEventListener(이벤트명, 리스너, [옵션])

const box = document.querySelector('.box');
box.addEventListener('click', onClickButton);

setTimeout(() => {
    box.removeEventListener('click', onClickButton);
}, 3000);
onClickButton = () => {
    alert('box클릭 이벤트가 실행되었습니다.');
}
//removeEventListener() 주의 : 함수명을지정하여 사용한다(화살표함수 사용불가), addEventListener()와 같은 인수를 사용하여 지정한다(옵션포함).



//117.페이지로드시 이벤트사용하기
//DOM요소 액세스타이밍에 맞춰 작업을 처리하고싶을때
//이미지로딩이 완료된후 작업을 처리하고싶을떄
//DOMContentLoaded : HTML문서로딩완료시점
//script태그에 defer속성을 설정하면 HTML로딩후 스크립트가 실행된다. 이는 DOMContentLoaded보다는 발생시점이 앞선다.



//118.클릭이벤트사용하기
//버튼클릭시작업처리
//click


//119.마우스조작이벤트
//mousedown : 마우스버튼을 누르는 시점
//mouseup : 마우스버튼을 떼는시점
//mousemove : 마우스를 움직이는 시점

//마우스이벤트의 정보를 가져오고싶은 DOM요소에 각각의 이벤트를 설정한다. main zmffotm wlwjddythdptj akdntm dnawlrdladp EKfk fhrmcnffur
const logArea = document.querySelector('#log2');
logArea.addEventListener('mousedown', () => {
    logArea.innerHTML = `마우스 클릭 이벤트 발생`;
})
logArea.addEventListener('mouseup', () => {
    logArea.innerHTML = `마우스버튼을 떼는 이벤트 발생`;
})
logArea.addEventListener('mousemove', () => {
    logArea.innerHTML = `마우스 이동 이벤트 발생`;
})



//120.마우스 오버이벤트사용하기
//mouseenter : 포인팅 디바이스가 요소의 위치에 있을때
//mouseleave : 포인팅 디바이스가 요소를 벗어날때



//123.스크롤 이벤트 처리하기
//scroll : 대상요소의 스크롤작업

window.addEventListener('scroll', () => {
    console.log('스크롤작업', window.scrollX, window.scrollY);
});



//124.텍스트선택 이벤트처리하기
//selectstart : 텍스트선택시점
<p class="paragraph">네.</p>
document.querySelector('.paragraph').addEventListener('selectstart', () => {
    console.log('텍스트가 선택되었습니다.');
});

//선택한 문자열을 말풍선으로 표시하는 샘플
//(1)selectstart이벤트로 텍스트선택 발생 확인
//(2)mouseup이벤트(버튼을 떼는시점)로 선택한 문자열을 말풍선에 표시
//(3)말풍선클릭시 닫기

//EventListener(이벤트명, 리스너, [옵션])
<p class="paragraph">Hello</p>
<div id="balloon"></div>
const balloon = document.querySelector('#balloon');
const paragraph = document.querySelector('.psragraph');
paragraph.addEventListener('selectstart', () => {
    paragraph.addEventListener(
        'mouseup', (event) => {
            const selectionCharacters = window.getSelection().toString();
            if (selectionCharacters.length > 0) {
                balloon.innerHTML = selectionCharacters;
                balloon.classList.add('on');
                balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`;
                balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`;
            } else {
                removePopup();
            }
        },
        {
            once: true
        }
    )
});
balloon.addEventListener('click', removePopup);
// paragraph.addEventListener (
// 1) 이벤트명 : mouseup,
// 2) 리스너 : (event) => {
//             const selectionCharacters = window.getSelection().toString();
//             if (selectionCharacters.length > 0) {
//                 balloon.innerHTML = selectionCharacters;
//                 balloon.classList.add('on');
//                 balloon.style.left = `${ event.clientX - balloon.clientWidth / 2 }px`;
//                 balloon.style.top = `${ event.clientY - balloon.clientHeight * 2 }px`;
//             } else {
//                 removePopup();
//             }
//         },
// 3) 옵션 : {
//             once: true
//         }
// )


//130.화면사이즈이벤트처리하기
//윈도우창의 크기에 따라 처리를 분류할때
//레이아웃의 크기를 조정할때
//resize
//resize 이벤트는 윈도우창의 사이즈가 1px만 변해도 발생하며, 무거운 작업을 지속적으로 수행할 경우 부하가 생겨서 시스템에 영향으 ㄹ준다. 문제해결의 한 방법으로는 resize 완료 확인 후, 처리작업을 실행할 수 있다. 타이버를 사용해 완료 후 1초이상 사이즈 변화가 없을때 작업을 실행하도록 설정한다.
let resizeTimer;
window.addEventListener('resize', () => {
    if (resizerTimer != null) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => {
        onResize();
    }, 1000);
})



//132.이벤트작동설정하기
//비동기처리 타이밍을 표시할떄
//이벤트타깃.dispatchEvent(이벤트)
//new Event('이벤트', [{detail:데이터}])
//dispatchEvent()는 이벤트 타깃에 임의의 이벤트를 발생시킨다. 이벤트의 생성은 'new Event('이벤트')를 사용한다.
// click()을 사용해 클릭이벤트를 발생시키는 방법
// HTML요소에 click()을 이용하여 클릭 이벤트를 발생시킬수 있는데,
setTimeout(() => {
    boxElement.click();
}, 1000);
//클릭 이외의 다른 이벤트를 이와같이 응용하는 것은 불가능.



//133.기본이벤트 작동 해지 설정하기
// 이벤트.preventDefault()