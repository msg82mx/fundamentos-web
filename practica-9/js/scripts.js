//alert('hola')

//Aqui ya usamos jquery y para poder hacer tenemos que declar en index el siguiente script

$('#btnGuardar').click(function(){
     //alert('Se activo el boton')
     let nombre = $('#nombre').val(); //creao una varialbe que jale el valor ds input  del id nombre
     //alert(nombre);  //imrpimomos la el valor de la varibale nombre

     let app = $('#app').val();
     //alert(app);
     let apm = $('#apm').val();
     //alert(apm);
     let email = $('#email').val();
     //alert(email);
     let tel = $('#tel').val();
     ///alert(tel);
     let edad = $('#edad').val();
     //alert(edad);
     let dep = $('#dep').val();
     //alert(dep);
 
     //validamo nombre
    if ($.trim(nombre) == '')  //valiamos que no este vacio el campo nombre, para que no este vacio ni lleve estapcio en blanco con la funcion trip
      {
        //alert('FAVOR DE INGRESAR UN NOMBRE')
        $('#result').html('<div class="alert alert-danger" role="alert">Favor ingresa nombre </div>')
        return
     }

    //validamos apellido paterno
      if ($.trim(app) == '') 
        {
            $('#result').html('<div class="alert alert-danger" role="alert">Favor ingresa apellido paterno </div>')
            return
        }


        if ($.trim(apm) == '') 
        {
            $('#result').html('<div class="alert alert-danger" role="alert">Favor apm </div>')
            return
        }

        if ($.trim(email) == '') 
        {
            $('#result').html('<div class="alert alert-danger" role="alert">Favor ingresa email </div>')
            return
        }
    

        if ($.trim(edad) == '') 
        {
            $('#result').html('<div class="alert alert-danger" role="alert">Favor ingresa edad </div>')
            return
        }


        if ($.trim(tel) == '') 
        {
            $('#result').html('<div class="alert alert-danger" role="alert">Favor ingresa telefono </div>')
            return
        }


        //sumamos la edad y modificamos el valor de la caja de texto 
        let sumaEdad = parseInt(edad) + parseInt(edad);
        $('#edad').val(sumaEdad);



                // mostramos los datos en la tabla
                let registro =  '<tr>'+
                                '<td>' + nombre + '</td>'+
                                '<td>' + app + '</td>'+
                                '<td>' + apm + '</td>'+
                                '<td>' + email + '</td>'+
                                '<td>' + tel + '</td>'+
                                '<td>' + edad + '</td>'+
                                '<td>' + dep + '</td>'+
                            
                                '</tr>'            //append significa agregar
                                $('#contEmpleados').append(registro) 
                               //ahora vamos a resetear el formulario para que se limpie cuando clie el boton
                               $('#formEmpleados')[0].reset()

  }) //fin boton guardar





