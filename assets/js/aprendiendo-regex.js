function validateNumeroTelefonoString(numeroEnString) {
    // +3412345678910
    const valueInt = String(numeroEnString).replace(/\D/g, "")

    // Validamos que el valor numérico tiene 11 caracteres numéricos SI o SI
    console.log(/^\d{11}$/.test(valueInt))
    console.log(/^[0-9]{11}$/.test(valueInt))

    console.log(/^(?:34[0-9]{11}|[0-9]{11})$/.test(valueInt))
}

function validatePassword(password) {
    return /^[a-zA-Z0-9]{6,}$/.test(password.value)
    // console.log(/^[a-zA-Z]+$/.test(input.value))
    // console.log(/^[a-zA-Z]*$/.test(input.value))
    //
    // console.log(/^[a-z]+$/i.test(input.value)) // hola, Hola, HOLa, holA
    // console.log(/^[a-z]*$/i.test(input.value))
    //
    // console.log(/^[a-zA-Z]{6,}$/.test(input.value))
    // console.log(/^[a-zA-Z]{1,6}$/.test(input.value))
}

function validateEmail(email) {
    // "camilo@gmail.com"
    return /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{3,4}$/.test(email)
}


function ProbandoRegex() {
    console.log(/^[0-9]+$/.test("464545"))
    console.log(/^(?:hola[0-9a-z]{5,8})$/.test("hola51454"))
    console.log(/^(?:5[0-9]{5,8})$/.test("51212"))
    console.log(/^12[a-zA-Z]+@$/.test("12hola@"))

    console.log(/^gato|perro$/.test("gatos")) // true
    console.log(/^(gato|perro)$/.test("gato")) // true
    console.log(/^(gato|perro)$/.test("gatos")) // false

    console.log("\n\nAnimales con or y ? optional")
    console.log(/^(gato?s|perro?s)?$/.test("gato")) // false
    console.log(/^(gato?s|perro?s)$/.test("gatos")) // true
    console.log(/^(gato?s|perro?s)$/.test("gats")) // true
    console.log(/^(gato?s|perro?s)$/.test("gat")) //  false

    console.log("\n\nReutilizar estructuras")
    console.log(/^(hola|adios)$/.test("hola")) // ["hola", "adios"]
    console.log(/^(hola|adios)$/.test("hola")) // ["hola"]
    console.log(/(:?hola|adios)/.test("hola"))

    console.log("\n\nConcatenación")
    console.log(/^a.c$/.test("abc")) // true
    console.log(/^a.c$/.test("abc")) // true
    console.log(/^a.c.e$/.test("abcde")) // true


    console.log("\n\nUso de caracteres especiales")
    console.log(/^\?[a-z]+$/.test("?ab"))
    console.log(/^\?[a-z]+\.[1-9]{3}$/.test("?ab.123"))
    console.log(/^h\?ola$/.test("h?ola"))

    console.log(/^\S+$/.test("hola")) // true
    console.log(/^\S+$/.test("hola mundo")) // false


    console.log("\n\nNegación")
    console.log(/^[^@]+$/.test("hola mundo")) // true
    console.log(/^[^@]+$/.test("hola@mundo")) // false


    // 0. Quiero comprobar un correo electrónico.
    //      - primera parte: texto que acepte minúsculas y mayúsculas y números y mínimo 3 caracteres
    //      - Un @ obligatorio
    //      - segunda parte: solo puede ser gmail, outlook, hotmail y también icloud
    //      - un punto obligatorio
    //      - Finalice o en "es" o en "com"
    // camilo@gmail.com

    console.log("\n\nEjercicio 0")
    console.log(/^[a-zA-Z0-9]{3,}@(gmail|outlook|hotmail|icloud)\.(es|com)$/.test("hola@mundo")) // false
    console.log(/^[a-zA-Z0-9]{3,}@(gmail|outlook|hotmail|icloud)\.(es|com)$/.test("camilo@mundo.com")) // false
    console.log(/^[a-zA-Z0-9]{3,}@(gmail|outlook|hotmail|icloud)\.(es|com)$/.test("@gmail.com")) // false
    console.log(/^[a-zA-Z0-9]{3,}@(gmail|outlook|hotmail|icloud)\.(es|com)$/.test("ca@gmail.com")) // false -> pedimos mínimo 3 caracteres al principio y solo tenemos 2 (ca)
    console.log(/^[a-zA-Z0-9]{3,}@(gmail|outlook|hotmail|icloud)\.(es|com)$/.test("camilo@gmail.com")) // true


    /*
    * 1. Código numérico -> Verificar si la cadena tiene 5 caracteres en TOTAL, empieza por 7 y finaliza en 9.
    */
    console.log("\n\nEjercicio 1")
    console.log(/^7[a-zA-z0-9]{3}9$/.test("7lol9"))


    /*
    2. Validación de username -> ejemplo: cam97PRO -> Debemos de comprobar que la cadena tiene 3 caracteres fijos en
    * minúscula, luego hay dos valores numéricos donde solo se aceptan números del 5 al 9 y finalmente termina con una
    * cadena con mínimo 1 carácter a "n" caracteres en mayúsculas.
    */
    console.log("\n\nEjercicio 2")
    console.log(/^[a-z]{3}[5-9]{2}[A-Z]+$/.test("cam97PROM"))


    /*
    3. Tenemos un array con los siguientes elementos: gato, perro, perros, gatos, loros, vaca y una cadena vacía "".
    * Tenemos que imprimir por consola true o false dependiendo si los animales terminan en "s" o no. Solo aceptamos (true)
    * los que NO terminan en "s". Obviamente, las cadenas vacías no podemos aceptarlas.
    */
    console.log("\n\nEjercicio 3")
    let arr = ['gato', 'perro', 'perros', 'gatos', 'loros', 'vaca', '']
    arr.forEach((element) => {
        console.log(/^[a-z]+[^s]$/.test(element))
    })


    /*
    4. Quiero validar si un documento cumple con un formato específico. El formato es el siguiente: file_2024.txt.
    * Estos archivos son SOLO TXT, y el número (fecha) siempre será de 4 caracteres. El nombre, donde pone file, puede
    * ser cualquier texto pero solo en minúscula. A veces puede no estar presente el nombre en el documento. Por ejemplo,
    * _2015.txt
    * */
    console.log("\n\nEjercicio 4")
    console.log(/^[a-z]*([0-9]{4}\.txt)$/.test("dddd2026.txt"))


    // Un lookahead es una condifición como si fuera un if.
    // Como es una obligación lo ponemos entre parentesis () y acto seguido tenemos dos expresiones:
    //  ?=
    // ?!
    // La expresión ?= signinfica que la cadena de texto que estamos validando debe de contener algo
    // La expresión ?! signinfica que la cadena de texto que estamos validando NO DEBE de contener algo.

    // Además, si después del = ponemos un ?=.* significa que el valor de después del * debe de encontrarse en cualquier
    // lugar de la cadena

    console.log("\n\nLookaheads")
    console.log(/^(?=.*ok)[a-zA-Z0-9]+$/.test("hola")) // false -> // esto es, que en cualquier lugar de la cadena a verificar debe de encontrarse ok
    console.log(/^(?=.*ok)[a-zA-Z0-9]+$/.test("holaokbd")) // true

    console.log(/^(?=[a-zA-Z])[a-zA-Z]+$/.test("12Hola")) //  false // Esto es que el primer caracter debe de empezar en una letra min o may
    console.log(/^(?=[a-zA-Z])[a-zA-Z]+$/.test("Hola")) //  true

    console.log(/^(?=.*[0-9])[a-zA-Z]+$/.test("Hola")) //  false

    // el [0-9] y el \d es lo mismo.
    console.log(/^(?=.*[0-9])[a-zA-Z0-9]+$/.test("Hol1a")) //  true // Debe de contener en algún momento un valor numérico del 0 al 9
    console.log(/^(?=.*\d)[a-zA-Z0-9]+$/.test("Hol1a")) //  true


    console.log("\n\nNegación Lookaheads")
    console.log(/^(?!.*\d)[a-zA-Z0-9]+$/.test("Holaaa")) //  true
    console.log(/^(?!.*\d)[a-zA-Z0-9]+$/.test("Hola1aa")) //  false

    // console.log(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test()) //

    console.log("\n\nComprobando contraseña")
    console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test("hola16")) // false
    console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test("holA16")) // true

    /*
    * Email con restricciones.
    *   - El correo no puede empezar con @. Debe de contener un @ en cualquier punto del correo.
    *   - Debe de contener un. En cualquier lugar del correo.
    *   - Aceptar valores numéricos, texto (may o min), mínimo 5 caracteres y no puede contener este símbolo dólar $
    * */
    console.log("\n\nComprobando contraseña")
    console.log(/^(?!@)(?=.*@)(?=.*\.)(?!.*\$)[a-zA-Z0-9@.]{5,}$/.test("Hol.@1234"))


    /*
    *
    * Queremos comprobar una contraseña. Esta debe de tener un @ y un punto ".". Debe de tener al menos dos minúsculas
    * consecutivas y dos mayúsculas consecutivas. Además, debe de contener un dígito del 5-9 en cualquier lugar de la
    * cadena.
    * Finalmente, la cadena debe de terminar en un $
    *
    * */

    console.log(/^(?=.*@)(?=.*\.)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[5-9])[a-zA-Z5-9@.$](\$)$/.test(""))

}