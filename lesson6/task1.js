function handleNum (num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num);
}
    else {
        handleOdd(num);
    }
}

function handleEven(num) {
  console.log (num + ' is even');
}

function handleOdd(num) {
  console.log(num + ' is odd');
}

let num = Math.floor(Math.random() * 11);

handleNum(num, handleEven, handleOdd);