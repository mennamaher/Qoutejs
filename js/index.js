
// var qoutes= [
//     {
//         "quote":' “Be yourself; everyone else is already taken.” ',
//         "author":' ― Oscar Wilde '
//     },
//     {
//         "quote":' “A room without books is like a body without a soul.”',
//         "author":' ― Marcus Tullius Cicero'
//     },
//     {
//         "quote":' “You only live once, but if you do it right, once is enough.” ',
//         "author":'― Mae West '
//     },
//     {
//         "quote":' “A friend is someone who knows all about you and still loves you.” ',
//         "author":' ― Elbert Hubbard'
//     },
//     {
//         "quote":' “Live as if you were to die tomorrow. Learn as if you were to live forever.”',
//         "author":' ― Mahatma Gandhi'
//     },
//     {
//         "quote":' “It is better to be hated for what you are than to be loved for what you are not.” ',
//         "author":' ― Andre Gide, Autumn Leaves'
//     }
// ];




// const qoute = [
//     'Be yourself; everyone else is already taken. ― Oscar Wilde',
//     'A room without books is like a body without a soul.',
//     'You only live once, but if you do it right, once is enough.',
//     'A friend is someone who knows all about you and still loves you.',
//     'Live as if you were to die tomorrow. Learn as if you were to live forever.',
//     'It is better to be hated for what you are than to be loved for what you are not.'
// ]
// function press(){
//     container += '<p>helo </p>';
//     document.getElementById('press').innerHTML= container;
// 
// function press(){
//     var qoteRandom = qoutes [Math.trunc(Math.random()* qoutes.length )];
// // document.getElementById('press').innerHTML= qoutes[qoteRandom];
// document.getElementById('qote').innerHTML= qoutes[qoteRandom].quote;
// document.getElementById('authr').innerHTML= qoutes[qoteRandom].author

// }
// // }



const qoutes= [
    {
        "quote":' “Be yourself; everyone else is already taken.” ',
        "author":' ― Oscar Wilde '
    },
    {
        "quote":' “A room without books is like a body without a soul.”',
        "author":' ― Marcus Tullius Cicero'
    },
    {
        "quote":' “You only live once, but if you do it right, once is enough.” ',
        "author":'― Mae West '
    },
    {
        "quote":' “A friend is someone who knows all about you and still loves you.” ',
        "author":' ― Elbert Hubbard'
    },
    {
        "quote":' “Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        "author":' ― Mahatma Gandhi'
    },
    {
        "quote":' “It is better to be hated for what you are than to be loved for what you are not.” ',
        "author":' ― Andre Gide, Autumn Leaves'
    }
];

function press(){
    const random = Math.trunc(Math.random()* qoutes.length );
    document.querySelector('#qote').textContent = qoutes[random].quote;
    document.querySelector('#authr').textContent = qoutes[random].author;

}