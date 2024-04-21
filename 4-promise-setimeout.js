const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I resolved');
            console.log('I resolved console');
        }, 1000);
    });
};

const prom = returnPromiseFunction();