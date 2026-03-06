function changeAuthFormV1(tipoFormulario) {
    /*
    * En el HTML, los botones deben de tener un llamado/evento de tipo onclick y
    * llamar a esta fn. Si es el botón de registrarme, tiene que ser changeAuthFormV1('registro')
    * y si es el botón de iniciar sesión tiene que ser changeAuthFormV1('login').
    *
    * El parámetro que véis de registro y login, es lo que llega a la función como variable llamada
    * tipoFormulario para identificar qué formulario queremos mostrar y cuál queremos ocultar.
    * */

    let formLogin = document.querySelector("form.login-form");
    let formRegister = document.querySelector("form.register-form");

    if (tipoFormulario === "registro") {
        formRegister.classList.add("active");
        formLogin.classList.remove("active");

    }
    else if (tipoFormulario === "login") {
        formLogin.classList.add("active");
        formRegister.classList.remove("active");
    }
}




// Esto es lo que usamos actualmente
document.addEventListener("DOMContentLoaded", () => {

    const changeButtonForm = document.querySelectorAll("button.change-form");

    changeButtonForm.forEach(btn => {
        btn.addEventListener("click", function () {

            let padre = btn.parentNode.parentNode;
            padre.classList.remove("active");

            if (padre.classList.contains("login-form")) {
                document.querySelector(".register-form").classList.add("active");
            } else {
                document.querySelector(".login-form").classList.add("active");
            }

        })
    })

})
