let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('yay, I resolved');
        }, 1000)
    });
}

async function noAwait() {
    let value = myPromise();
    console.log(value);
}

async function yesAwait() {
    let value = await myPromise();
    console.log(value);
}

noAwait();
yesAwait();



/* Asi es como una ASYNC funcion lograr lo mismo:
async function asyncAwaitVesion() {
    let firstValue = await returnFirstPromise();
    console.log(firstValue);
    let secondValue = await returnSecondPromise();
    console.log(secondValue);

} */