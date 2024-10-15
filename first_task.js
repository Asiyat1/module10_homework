let input = prompt ('Введите значение');
let num = +input;
if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 === 0) {console.log ('число четное')}
else {console.log('число нечетное')}
else {console.log('упс, кажется, вы ошиблись');
}}
