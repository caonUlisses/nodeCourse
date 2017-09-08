let assyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            reject('Arguments must be numbers');
        }, 1500);
    });
};

assyncAdd(5,7).then((res) => {
    console.log(res);
    return assyncAdd(res, 33);
}).then((res) => {
    console.log(res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey, it worked!');
//         reject('Did not work!');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });