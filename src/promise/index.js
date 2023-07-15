// una promesa tiene tres estados: 
//PENDIENTE: se esta ejecutando
//CUMPLIDO a regresado la informacion deseada
//O ha sido rechasado

//Estructura basica
const promise = new Promise(function(resolve, reject){
    resolve('hey!');
});


//Ejemplo de promesa con vacas

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10 ){
        resolve(`We have ${cows} cows on the farm`);
    } else{
        reject("There in not cows on the farm");
    }
});

countCows.then((result) => {    //then lo usamos para anidar mas solicitudes encadenadas
    console.log(result);
}).catch((error) =>{            //para el reject para cuando hay un error
    console.log(error);
}).finally(() => console.log("Finally"));


