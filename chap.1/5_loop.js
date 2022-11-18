for (let i=10; i>0; i--) {
    console.log(i);
};

for (let i=10; i>0; i--) {
    if (i%2 === 1) continue;
    console.log(i);
};

for (let i=10; i>0; i--) {
    if (i<5) break;
    console.log(i);
};

/////////

const board1 = {
    id: 1,
    title: 'board1',
    content: 'content1',
    writer: 'a'
}

const board2 = {
    id: 2,
    title: 'board2',
    content: 'content2',
    writer: 'b'
}

const board3 = {
    id: 3,
    title: 'board3',
    content: 'content3',
    writer: 'c'
}

const boards = [board1, board2, board3];

for (let b of boards) {
    console.log(b);
};

for (let b in boards) {
    console.log(b);
};

let number = 0;

while (number<10) {
    console.log(number);
    number++;
};

let num = 0;
while(true) {
    if (num === 10) {
        break;
    }
    console.log(num);
    num++;
};

////////////////

const biggerThanThree = (numbers) => {
    const bigger3 = [];
    for (let i=0; i<numbers.length; i++) {
        const target = numbers[i];
        if (target > 3) {
            bigger3.push(target);
        }
    }
    return bigger3;
}

const aa = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(aa));

///////////////

const biggerThanThree = (numbers) => {
    const bigger3 = [];
    for (let number of numbers) {
        if (number > 3) {
            bigger3.push(number);
        }
    }
    return bigger3;
}

///////////////

const biggerThanThree = (numbers) => {
    const bigger3 = [];
    for (let number in numbers) {
        if (numbers[number] > 3) {
            bigger3.push(numbers[number]);
        }
    }
    return bigger3;
}

////////////////

const biggerThanThree = (numbers) => {
    const bigger3 = [];
    let idx = 0
    while (true) {
        if (numbers.length === idx) {
            break;
        }
        //
        if (numbers[idx] > 3) {
            bigger3.push(numbers[idx])
        }

        //
        idx++
    }
    return bigger3;
}

//변수참조관계, 변수선언, 값할당, 함수선언, 함수실행,