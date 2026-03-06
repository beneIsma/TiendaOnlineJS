function TogglePassword(elementoPresionado) {

    const divPadre = elementoPresionado.parentNode; // <div class="form-floating....></div>
    const input = divPadre.querySelector("input")
    const icon = elementoPresionado.querySelector("i")

    input.type = input.type === "password" ? "text" : "password";

    // if (input.type === "password") {
    //     input.type = "text";
    // } else {
    //     input.type = "password";
    // }

    if (icon.classList.contains("bi-eye-fill")) {
        icon.classList.remove("bi-eye-fill")
        icon.classList.add("bi-eye-slash-fill")
    }
    else{
        icon.classList.remove("bi-eye-slash-fill")
        icon.classList.add("bi-eye-fill")
    }

}