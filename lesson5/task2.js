function checkOrder(available, ordered) {
    console.log('Available: ' + available, 'ordered: ' + ordered);
    if (ordered > available)  {
        console.log("Your order is too large, we don’t have enough goods.");
    }
    else if (ordered === 0) {
        console.log("Your order is empty");
    }
    else if (ordered < available) {
        console.log("Your order is too large, we don’t have enough goods.");
    }
}
let available = Math.floor(Math.random() * 21);
let ordered = Math.floor(Math.random() * 21);

checkOrder(available, ordered);