const name = 'Angel';

const getRandMsg = () => {
    let l = [
        ' is very kind and compassionate',
        ' does not like to go down without a fight',
        ' is prone to curiosity leading them to new ideas',
        ' is bubbly around new people',
        ' is very good at analyzing situations methodically',
        ' is typically the first person to offer paying the bill',
        ' enjoys entertainment more than studying',
        ' enjoys social activities over solitude',
        ' enjoys playing video games over watching movies',
        ' loves to debate and/or discuss complex topics',
        ' is good at starting conversations'
    ];
    let l2 = [
        ' and keeps their cool under pressurer',
        ' and enjoys small-talk',
        ' and loves giving their opinion',
        ' and likes to critique films',
        ' and knows how to read a room',
        ' and games till midnight or later',
        ' and appreciates friendship as much as family',
        ' and keeps mementos someplace safe'
    ]
    let r = Math.floor(Math.random() * l.length);
    let r2 = Math.floor(Math.random() * l2.length);

    return `${name}${l[r]}${l2[r2]}`
}

console.log(getRandMsg());