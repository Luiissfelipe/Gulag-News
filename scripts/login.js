const formulario = document.querySelector(".principal_login_formulario");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = inputEmail.value.trim();
    const password = inputPassword.value;
    if (email === "" || email.contais("@") === false) {
        inputEmail.classList.add("erro");
        inputEmail.setAttribute("placeholder", "Insira um email válido");
        inputEmail.value = "";
    }

    if (password === "") {
        inputPassword.classList.add("erro");
        inputPassword.setAttribute("placeholder", "Insira uma senha válida");
        inputPassword.value = "";
    }

});