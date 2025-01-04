document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submits", function(event) {
        console.log()
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtén los valores de usuario y contraseña
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí, podrías realizar una verificación del usuario y contraseña
        // En este ejemplo, simplemente comprobamos si ambos campos no están vacíos
        if (username !== "" && password !== "") {
            // Redirige al usuario a la página principal
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
