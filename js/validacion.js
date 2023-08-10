document.getElementById("regBtn").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    var emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }

    if (nombre === "" || apellido === "" || password1 === "" || password2 === "" || !terminos) {
        alert("falta completar campos.")
        showAlertError()
    } else if (password1.length < 6) {
        alert("la contraseña debe contener al menos 6 digitos")
        showAlertError()
    } else if (password1 !== password2) {
        alert("Las contraseñas deben ser iguales");
        showAlertError()
        
} else if (!emailValidation.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    showAlertError()
} else {
    showAlertSuccess()
}

});


