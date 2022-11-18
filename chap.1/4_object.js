/*
id,
title,
content,
writer

boards 4개
 */

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

const display = (b) => {
    console.log(`${b.id}, ${b.title}, ${b.content}, ${b.writer}`);
    console.log(`${b['id']}, ${b.title}, ${b.content}, ${b.writer}`);
}

display(board1);
display(board2);

const display2 = (b) => {
    const { id, title, content, writer } = b;
    console.log(`${id}, ${title}, ${content}, ${writer}`);
}

display2(board3);