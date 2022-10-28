// alert('Hola JS') 

//console.log("HoLa JS")

var nombre = 'Juan';
var telefono = '7712668499';
var email = 'martinmx888@gmail.com';
var edad  = 29;
var sexo = 'Masculino';
var casado = true;
var mensaje = 'hola, feliz cumpleaños';

//Otra manera de declarar variavles es asi
//auto = 'nissan';

//Asi se declaran constantes
const gravedad = 9.81;

//Otra manera de declarar variables
let empleo =  'Programador';

//Existen tipos de varibles de tipo arreglo  o listas
let colores = ['azul','verde','rojo','cafe','morado'];
let numeros = [1,2,3,4,5,6,7,8,9,10];

//A esto se le llama objetos en formato JSON, o diccionario
let auto = {
              colores: ['verde','rojo','azul'],
              tipo: ['manual','automatico'],
              cilindros: [4,6,8,12],
              puertas: [2,3,5,7,9],
 
              modelo: [
                         {
                            A1:'Cedan', 
                            descripcion:'auto sedan etc 0...', 
                            tipoPiel:false,
                         }, 

                         {
                            A2:'Hashback #1', 
                            descripcion:'auto hashback etc #1...', 
                            tipoPiel:true,
                         },

                         {
                            A3:'Hashback #2 ', 
                            descripcion:'auto hashback #2  etc 2...', 
                            tipoPiel:true,
                         },


                         {
                            A4:'Cedan 2 ', 
                            descripcion:'auto sedan #2 etc... #2 ', 
                            tipoPiel:false,
                         }

                      ]
           }


//console.log(colores[3]);
//console.log(auto.modelo[2].descripcion)
//console.log(auto.modelo[2].descripcion)



//Condiciones y ciclos
let numeroUno = 7
let numeroDos = 1

if (numeroUno > numeroDos)
   {
    console.log('El numero UNO es mayor ');
   }
else
   {
    console.log('El numero DOS  es mayor ');
   }


if (numeroUno ==  numeroDos)
   {
    console.log('SI son iguales')
   }
else
   {
    console.log('Los  numeros NO son iguales')

   }

   /* Para comparar tispos iguales en cuanto a tipo, y valor se ponen tres veces igual ===, si ponemos dos puede 
   solo comparar el valor que tine una variable, pero no distingue si es char , int, etc.*/



//Ciclos for

for (let i=0; i<=4; i++)
   {
      console.log(colores[i])
   }



   //ciclos foreach imprime todos  los valores  de una lista
   colores.forEach(Var_resultado => {
    console.log(Var_resultado)
   } )


//funciones en javascript

function Funcion_sumar()
   {
       let ingresoUno = 50
       let ingresoDos = 127
       let resultadoSuma = ingresoUno + ingresoDos
       //limpiamos la pantalla de la consola
       console.clear();

       console.log('El total de la sumatoria es = ')
       console.log(resultadoSuma)
   }
//Mandamos llamar a una funcion
Funcion_sumar();



let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'SDFGHJKIUYTRUH132',
    nombreReceptor:'Pedro',
    rfcReceptor:'5678Y8IYIU',
    concepto:[
        {nombre:'Pala', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', costoUnitario:90, sku:'fghU89UIjytuf'},
        {nombre:'Pico', costoUnitario:200, sku:'SDFHUI'},
        {nombre:'Desarmador', costoUnitario:40, sku:'UISDHFIUYSD'}
    ],
    iva:16
};



//console.log(auto.modelo[2].descripcion)

/*

//Imprimimmos con foreach
factura.concepto.forEach(Var_resultado_productos => {
    console.log(Var_resultado_productos.nombre)
} )

*/


//conesto ya busca en el objeto factura, ahora solo hay que imprimir todo el listado
//console.log(factura.concepto[1].nombre)

for (let j=0; j< 4; j++ )
   {
      console.log(factura.concepto[j].nombre)
   }

































