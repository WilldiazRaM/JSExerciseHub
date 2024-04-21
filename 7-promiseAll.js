/*  promise.all() devolvera una unica promesa. Esta promesa se resolvera cuando todas las promesas en lla matriz de argumentos se hallan
ReadableStreamDefaultController. El valor de debolucion de esta promesa sera una matriz que conentdra los valores resueltos de cada promesa de la matriz de argumentos */


async function asyncPromiseAll() {
    const resultArray = await Promise.all([AsyncTask1(), asyncTask2(), asycTask3(), asynctask4()]);
    for(let i = 0; i < resultArray.length; i++){
        console.log(resultArray[i]);
    }
}