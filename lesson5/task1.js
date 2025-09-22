// Function Declaration

function calculate1(width, height) {
    let result = width*height;
    console.log(result);
}
calculate1(4,5);


function calculate2(width, height) {
    let result = width*height;
    return result;
}

console.log(calculate2(3,3));

// Function Expression
let square = function(width, height) {
    let dimension = width*height;
    console.log(dimension);
}

square(15, 6);

// Arrow Function

let calculate3 = (width, height) => {
    return width * height;
}
console.log(calculate3(5,5));