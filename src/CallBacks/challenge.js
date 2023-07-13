const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){             //permite recibir la url y el callback que sera una funcion anonima para recibir la solicitud, la url se escribio diferente para no apuntar al valor creador en la linea 2
    let xhttp = new XMLHttpRequest();             //este elemento nos permie controlar el flujo del llamado 

    xhttp.open('GET', urlApi, true);              //abre conexion a la API, GET es el tipo en este caso obtener, url que va a utilizar, true para habilitar
    xhttp.onreadystatechange = function(event){   //Es parte de los elementos que entrega xmlhttprequest para escuchar diferentes estados que tiene la solicitud,
        if(xhttp.readyState === 4){               //Tipo de estado 0,1,2,3,4 en este caso el 4 cuando ya se a completado
            if(xhttp.status === 200){             //tipo de solicitud y estados que retorna en este caso 200 es que respondio de forma correcta 
                callback(null, JSON.parse(xhttp.responseText)); //null, transformacion de la informacion ya que se recibe como texto pero con este valor JSON lo transformamos en un objeto
            }
        } else{
            const error = new Error('Error' + urlApi); //Error es el nombre, urlApi es para decir que el error es de un elemento de la API
            return callback(error, null);          
        }
    }
    xhttp.send();       //Para que se ejecute la logica que hemos creado 
}