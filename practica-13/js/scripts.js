//alert('Si entra en la pagina')

$('#btnCompararEdades').click(function() {

    //alert('holaaa')
    let edadJuan = parseInt ( $('#edadJuan').val())
    let edadPedro = parseInt ($('#edadPedro').val())

    //alert(edadJuan)
    //alert(edadPedro)

    if (edadJuan == edadPedro)
        { alert('Son de la misma edad Pedro y Juan')   }
    else
        {
            if (edadJuan > edadPedro)
                {
                    alert('Juan es mayor')  
                    //alert(edadJuan)
                }
            else
                {
                    alert('Pedro es mayor')
                    //alert(edadJuan)
                }
        }




})