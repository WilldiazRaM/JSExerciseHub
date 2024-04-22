fetch('http://api-to-call/endpoint', {
    method: 'POST',
    body: JSON.stringify({ id: '200' })
})
.then(response => {
    if(response.ok) {
        return response.json();
    }
    throw new Error('Request Failed');
})
.then(jsonResponse => {
    // Código a ejecutar con la respuesta JSON
})
.catch(error => {
    console.log(error.message);
});
