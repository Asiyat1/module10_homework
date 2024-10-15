let x;
if ((typeof (x) == 'number') && (!isNaN (x))) {console.log("x это число");
} else if (typeof (x) == 'string') {
    console.log("х это строка");
} else if (typeof (x) == 'boolean') {
    console.log("х это Boolean");
} else {
    console.log(" x это undefined");
}
