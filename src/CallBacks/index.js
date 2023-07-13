function sum(num1, num2){
    return num1 + num2;
};         
//funcion que suma valores
function calc(num1, num2, callback){
    return callback(num1, num2);
};            
//recibe como argumento una funcion, retornamos internamente la funcion y os voleres de num1 y num2

console.log(calc(2, 2, sum));


setTimeout(function (){
    console.log('hola JavaScript');
}, 5000); 
//SetTimeout por si misma ya es un callback que recibe como argumento una funcion con los argumentos que queremos

function gretting(name){
    console.log(`hola ${name}`);
};

setTimeout(gretting, 2000, 'Felipe');
//recibe funcion, tiempo y argumentos que va a recibir la funcion que estamos pasasando