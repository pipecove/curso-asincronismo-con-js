//crearemos un producto para agregar a la API con la opcion de POST

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){                    //Funcion que se encarga de utilizar fetch y de trasformarlo al metodo post con las configuraciones basicas que podemos utilizar 
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "New Product Cours",
    "price": 99999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)     //como una promesa para poder utilizar el then 
    .then(response => response.json())  //convertimos la respuesta en un objeto JSON
    .then(data => console.log(data));