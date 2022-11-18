/*
주문번호가

1 => americano
2 => latte
3 => ice tea
4 => green tea
==> no menu

 */

// const orderNum = 3;
//
// if (orderNum === 1) {
//     console.log('americano');
// } else if (orderNum === 2) {
//     console.log('latte')
// } else if (orderNum === 3) {
//     console.log('ice tea')
// } else if (orderNum === 4) {
//     console.log('green tea')
// } else {
//     console.log('no menu')
// }
//
// switch (orderNum) {
//     case 1 :
//         console.log('americano')
//         break;
//     case 2 :
//         console.log('latte')
//         break;
//     case 3 :
//         console.log('ice tea')
//         break
//     case 4 :
//         console.log('green tea')
//         break
//     default :
//         console.log('no menu')
// }

const menuName = 'latte';

switch (menuName) {
    case 'americano' :
        console.log(1);
        break;
    case 'latte' :
        console.log(2);
        break;
    case 'ice tea' :
        console.log(3);
        break;
    case 'green tea' :
        console.log(4);
        break;
    default :
        console.log('');
}

switch (menuName) {
    case 'americano' :
    case 'latte' :
        console.log(2);
        break
    case 'ice tea' :
    case 'green tea' :
        console.log(4);
        break
    default :
        console.log('');
}




const a = 10;
if (a > 15) {
    console.log('a 가 15 큽니다.');
} else {
    console.log('a 가 15보다 크지 않습니다.');
}

