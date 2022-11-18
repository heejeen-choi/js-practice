const boards = [];
for (let idx=0;idx<100;idx++) {
    const writer = idx % 3 === 0 ? 'foo' : 'bar';
    const board = {
        id: idx,
        writer: writer,
        title: `Hello ${idx}`,
        content: 'Hello World'
    };
    boards.push(board);
}

// console.log(boards);

const writerTitleList = boards.map(v => {
    return {writer: v.writer, title: v.title}
})
console.log(writerTitleList);

const underbarList = boards.map(v => {
    const {id, writer, title, content} = v;

    return `${id}_${writer}_${title}_${content}`
});

console.log(underbarList);

// {
//     writer: 'foo',
//         board: { id: 93, title: 'Hello 93', content: 'Hello world' }
// },

// *
// **
// ***
// ****
// *****
// ******
// *******
//
// *
// **
// ***
// ****
// *****
// ******
// ******
// *****
// ****
// ***
// **
// *

const generateStar = (starCount) => {
    let star = '';
    for (let i=0; i<starCount; i++) {
        // star = star + '*'
        star += '*';
    }
    return star;
}

const stars = [];
for (let i=0;i<7;i++) {
    // let star = ''
    //
    // for (let j=0; j<i+1; j++) {
    //     star = star + '*';
    // }
    let star = generateStar(i+1);
    stars.push(star)
}


// const starList = stars.map(v => {
//     const {stars++} = v
// })

console.log(stars);