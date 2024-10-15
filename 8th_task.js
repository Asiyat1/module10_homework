const arr = new Map()
arr.set ('key1', 'value1');
arr.set ('key2', 'value2');
arr.set ('key3', 'value3');
for (let pair of arr.entries()) {
    console.log ('Ключ = ${pair[0]}, значение = ${pair[1]}');
}