const fs = require('fs');

const apiURL = 'https://api.thecatapi.com/v1/';
const apiKey = //https://www.thedogapi.com/ Solicita tu APIKEY

async function getRandomCatimage(){
    try{
        const response = await fetch(apiURL + 'images/search?api_key=' + apiKey)
        const data = await response.json();
        return data[0].url; //Devuelve solo la URL de la imagen
    }catch(err){
        console.log(`Error al obtener la información: ${err}.`);
    }
}

async function descargarYGuardarImagen() {
    try {
        // Obtener la URL de la imagen aleatoria de un gato
        const urlImagen = await getRandomCatimage();
        
        // Descargar la imagen
        const response = await fetch(urlImagen);
        const imagenBuffer = await response.arrayBuffer(); // Usar arrayBuffer() en lugar de buffer()
        
        // Guardar la imagen en un archivo local
        fs.writeFileSync('imagen_gato.jpg', Buffer.from(imagenBuffer)); // Convertir ArrayBuffer a Buffer
        console.log('¡Imagen de gato descargada y guardada con éxito!');
    } catch (error) {
        console.error('Error al descargar y guardar la imagen:', error);
    }
}

// Llamar a la función para descargar y guardar la imagen aleatoria de un gato
descargarYGuardarImagen();