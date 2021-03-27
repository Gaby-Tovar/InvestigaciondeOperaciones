function validar(){
    if(document.formulario.h.value.length==0){
        alert("El campo Lambda esta vacio")
        return 0;
    }

    if(document.formulario.M.value.length==0){
        alert("El campo Miu esta vacio")
        return 0;
    }

    if(document.formulario.M.value<1){
        alert("No puedes ingresar un valor de 0")
        return 0;
    }

    if(document.formulario.h.value<1){
        alert("No puedes ingresar un valor de 0")
        return 0;
    }


    document.formulario.submit();
}