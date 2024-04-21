function usingsetTimeOut() {
    console.log('Im going to queued in the event loop');
}
setTimeout(usingsetTimeOut, 3000);

console.log('This is the last line of code in this file')