//alert('Hola desde Js y Ajax')

//llamams a jquerey
//body signinfica que cuando cargue la pagina cargue la funcion en ready
$('body').ready(function(){

    //Ahora llamemos por medio de ajax engine de jquery los datos de la siguiente liga publica
    //Se va consultar al sevidor y el servidor nos arrojara un  objeto Json con los datos consultados
    // De aqui se van  a sacar los datos por medio del objeto json 
    // https://jsonplaceholder.typicode.com/users

         //EStructurra  general de AJAX
         $.ajax({
            //URL de la api web service
            url:'https://jsonplaceholder.typicode.com/users',
            //Metodo de la llamada o peticion al servidor en este casi GET, POST, PUT DELETE, ETC
            method:'GET',
            //En que formato va regresar el formato Json, xml y otro
            dataType:'JSON',
            //data es para enviar datos al backend o servidor, en este caso solo se va a consultar no enviar nada 
            data:'',

                beforeSend: function () {
                            //Aqui es para hacer un accion mietras  SE REALIZA LA PETICION en serividor  

                            }, //Fin funcio before send

                success: function(data) {
                            //Cuando se obtienen los datos  de manera correcta
                            console.log(data)
                            console.log(data[4].name)
                            console.log(data[4].company.name)

                            //Ahora imprimimos todos los nombres de la base de datos (solonombres)
                            //Del objeto data jala todo al la var var_muiestra_nombres y imprimelo
                            data.forEach(var_element => {
                                console.log(var_element.name)

                                 //Ahora vamos a agregar los registros a nuestro html
                                    //$('#contentUsuarios').append(Var_muestra_nombres.name)
                                     //$('#contentUsuarios').append('<br>')
                                     //Cramos una tabla directamente en el div para mostrar los datos
                                     let registro = '<tr>' + 
                                            '<td>' +var_element.id +'</td>'+
                                            '<td>' +var_element.name +'</td>'+
                                            '<td>' +var_element.usuario +'</td>'+
                                             '<td>' +var_element.email +'</td>'+
                                             '<td>' +var_element.address.street +'</td>'+
                                             '<td>' +var_element.phone +'</td>'+
                                             '<td>' +var_element.website +'</td>'+
                                             '<td>' +vargit_element.company.name +'</td>'+
                                          '</tr>'

                                          $('#contentUsuarios').append(registro)
                                            
                            } );
                         
                            //O bieN otra maanera de hacer es e asi, el pedo es que necesitamos saber cuntos registros tiene el objeto json, de otra menera no hay como saberlo
                               //for (let i =0; i<10; i++)
                               // {  console.log(data.[i.name])}

                              
                            

                        },//Fin funcion succeess

                error: function() {
                            //cuando pasa un error y tienes que hacer algo, es decir si se cayo en sevidor etc....
                            alert('Error al obtener la información...')
                        }//Fin funcion error


         })  //Fin fucion ajaxz
    





})