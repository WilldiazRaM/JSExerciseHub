fetch('http://api-to-call.com/endpoint') // Realiza una solicitud HTTP GET a la URL proporcionada
    .then(response => {
        if(response.ok){ // Verifica si la respuesta de la solicitud fue exitosa (código de estado HTTP 200-299)
            return response.json(); // Convierte la respuesta JSON en un objeto JavaScript y la devuelve
        }
        throw new Error('Request Failed'); // Lanza un error si la solicitud falla (código de estado HTTP no está en el rango 200-299)
    }, networkError => console.log(networkError.message)) // Maneja errores de red, en caso de que la solicitud no se pueda realizar
    .then(jsonResponse => {
        // Código para ejecutar con la respuesta JSON
    });


/* 
// Realizar una solicitud GET a una URL
fetch('https://api.example.com/data')
    .then(response => {
        // Verificar si la solicitud fue exitosa (código de estado HTTP 200-299)
        if(response.ok) {
            // Extraer los datos de la respuesta en formato JSON
            return response.json();
        }
        // En caso de error, lanzar una excepción
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Hacer algo con los datos recibidos
        console.log(data);
    })
    .catch(error => {
        // Manejar errores de red o errores de servidor
        console.error('Error:', error);
    });
*/