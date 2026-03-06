function finalizarRegistro() {
    let datos = {
        "nombre": "Isma",
        "apellidos": "Gomez",
        "email": "isma@correo.com",
        "password1": "abc123",
        "password2": "abc123",
        "direccion": "Calle Falsa 123",
        "telefono": "600123456",
        "edad": 18,
        "ciudad": "Madrid",
        "pais": "ES"
    }

    //fetch nos permite la conexión a internet
    //Al enviar el mensaje queremos encriptarlo o sea usamos el método POST
    //El header nos dice que los datos que enviamos y recibimos a de ser de tipo JSON
    //En el header también viene el parámetro "Authorization": "Bearer" que lo que hace es que valide el token
    fetch("http://localhost:8000/api/registro/", { //El fetch ya es asíncrono
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos) //lo convierte a String y con ParseIn lo convierte a JSON.
    })
        .then(respuesta => { //Entonces cuando el back proporcione una respuesta ejecutamos el then.
            //respuesta = {true/false, message: "Error de mensaje", status: 200/300/400, respuesta.json()}
            if (!respuesta.ok) {
                throw new Error (respuesta.message);
            }
            if (respuesta.status === 400) {
                throw new Error (respuesta.message);
            }
            return respuesta.json()
        })
        .then(resultados => { //El segundo then es cuando ya comenzamos a pintar los datos en el front
            console.log(resultados); // Esto imprimiría los resultados que nosotros devolvemos en la view de registro que sería {success: true}
        })
        .catch(error => { //error tendrá el valor que hicimos en el primer then (respuesta.messages)
            console.log(error);
        })
}