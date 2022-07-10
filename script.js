function validar() {

    let rut = document.formulario.txt_rut.value;
    let telefono = document.formulario.txt_telefono.value;
    let tipo = document.formulario.select_tipo.value;
    let patente = document.formulario.txt_patente.value;
    let nombre = document.formulario.txt_nombre.value;
    let correo = document.formulario.txt_correo.value;
    let retiro = document.formulario.rbt_domiclio.value;
    let dia = document.formulario.date_dia_solicitado.value;
    let hora = document.formulario.date_hora_solicitada.value;
    //
    if (nombre.length <= 0) {
        alert("Debe ingresar un nombre")
        document.formulario.txt_nombre.focus();
        return false;
    }
    if (correo.length <= 0) {
        alert("Debe ingresar un correo")
        document.formulario.txt_correo.focus();
        return false;
    }
    if (isNaN(telefono)) {
        alert("Solo se permiten caracteres numericos")
        document.formulario.txt_telefono.focus();
        return false;
    }
    if (telefono.indexOf("+") > -1) {
        alert("Solo se permiten caracteres numericos")
        document.formulario.txt_telefono.focus();
        return false;
    }
    if (telefono.indexOf("9") != 0) {
        alert("El telefono debe comenzar con 9")
        document.formulario.txt_telefono.focus();
        return false;
    }
    if (telefono.length != 9) {
        alert("El telefono debe contener 9 caracteres numericos")
        document.formulario.txt_telefono.focus();
        return false;
    }
    if (rut.length < 9 || rut.length > 10) {
        alert("El largo del rut debe ser entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus();
        return false;
    }
    if (rut.indexOf(".") > -1) {
        alert("El rut no debe contener puntos")
        document.formulario.txt_rut.focus();
        return false;
    }
    if (rut.lastIndexOf("-") < 0) {
        alert("El rut debe llevar guion")
        document.formulario.txt_rut.focus();
        return false;
    }
    if (patente.length <= 0 || patente.length > 6) {
        alert("Debe ingresar una patente, maximo 6 caracteres")
        document.formulario.txt_patente.focus();
        return false;
    }
    if (dia == "") {
        alert("Debe ingresar una fecha")
        document.formulario.date_dia_solicitado.focus();
        return false;
    }
    if (hora == "") {
        alert("Debe ingresar una hora")
        document.formulario.date_hora_solicitada.focus();
        return false;
    }
    if (tipo == 0) {
        alert("Debe selcionar un modelo")
        document.formulario.select_tipo.focus();
        return false;
    }
    alert("Datos registrados \n" +
        "Nombre: " + nombre + " Correo: " + correo + " Rut: " + rut + "\n" +
        "Telefono: " + telefono + " Retiro a domicilio: " + retiro + " Patente: " + patente + "\n" +
        "Tipo: " + tipo + " Dia: " + dia + " Hora: " + hora + "\n")

}    