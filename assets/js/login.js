function toggleSteps(btn) {
    const steps = document.querySelectorAll("div.steps")

    const step1 = steps[0];
    const step2 = steps[1];

    if (btn.getAttribute("data-type-step") === "next") {

        const inputs = step1.querySelectorAll("input");
        const selects = step1.querySelectorAll("select");
        let errores = 0;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                errores += 1;
                inputs[i].classList.add("is-invalid");
            } else {
                if (inputs[i].classList.contains("is-invalid")) {
                    inputs[i].classList.remove("is-invalid");
                }
            }
        }

        for (let i = 0; i < selects.length; i++) {
            if (selects[i].value === "") {
                errores += 1;
                selects[i].classList.add("is-invalid");
            } else {
                if (selects[i].classList.contains("is-invalid")) {
                    selects[i].classList.remove("is-invalid");
                }
            }
        }

        /*
        * Si los inputs obligatorios no están vacíos, entonces dejamos cambiar al segundo paso
        * {
        * */
        if (errores === 0) {
            step1.classList.remove("active");
            step2.classList.add("active");
        }

    } else {
        step1.classList.add("active");
        step2.classList.remove("active");
    }
}

// Acordaos que este elemento es un array[elementos HTML con la clase btn-steps]
const btnSteps = document.querySelectorAll(".btn-steps");

btnSteps.forEach(btn => {
    btn.addEventListener("click", () => {
        toggleSteps(btn);
    })
})

function crearlistaErorres(errores) {
    const ol = document.querySelector("#items");
    ol.replaceChildren()

    errores.forEach((error) => {
        let li = document.createElement("li");
        li.className = "list-group-item list-group-item-danger"
        li.textContent = error;
        ol.appendChild(li);
    })
}

function validarInputs(form, errores, error) {
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
        if (input.type === "email") {
            if (!/^[a-zA-Z0-9._-]{3,}(@)(gmail|hotmail)(\.)(com|es)$/.test(input.value)) {
                errores.push("[CORREO ELECTRÓNICO] => El correo electrónico no es válido")
                error = false;
            }
        }

        if (input.classList.contains("password")) {
            console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])[a-zA-Z0-9.$-_%@]{6,}$/.test(input.value))
            if (input.value.length < 6) {
                errores.push("[CONTRASEÑA] => Contraseña necesita mínimo 6 caracteres")
                error = false;
            }
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}$/.test(input.value)) {
                errores.push("[CONTRASEÑA] => 1 dígito, 1 letra mayúscula, 1 letra minúscula y un caracter especial.")
                error = false;
            }
        }


        if (input.id === "registerPhone") {
            if (!/^((\+)[0-9]{2,3}(?!.*[a-zA-Z])[0-9]{9,11}|(?!.*[a-zA-Z])(?!.*[^a-zA-Z0-9])[0-9]{9,11})$/.test(input.value)) {
                console.log("[TELÉFONO] => Número no válido")
                error = false;
            }
        }
    })

    return {error: error, errores: errores}
}

function validarSelects(form, errores, error) {
    const selects = form.querySelectorAll("select");

    selects.forEach((select) => {
        if (select.value === "") {
            let nombre = select.getAttribute("data-name")
            errores.push(`[SELECT - ${nombre}] => Debes de seleccionar un valor válido.`)
            error = false;
        }
    })

    return {error: error, errores: errores}
}

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let error = true;
        let errores = [];

        const validarInputsVar = validarInputs(form, errores, error);

        const validarSelectsVar = validarSelects(form, validarInputsVar.errores, validarInputsVar.error);

        error = validarSelectsVar.error;

        if (!error) {
            crearlistaErorres(validarSelectsVar.errores);
            mostrarModal("notificaciones")
        } else {
            finalizarRegistro()
            form.submit()
        }
    })

})
