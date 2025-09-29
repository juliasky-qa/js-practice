function countDown(num) {

    if (num >= 0) {
    console.log(num);
    countDown(--num);
}
}
countDown(5);