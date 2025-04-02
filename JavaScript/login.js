let userAccountLogins = new Map([
    ["emailusuario1@email.com", "senha1"],
    ["emailusuario2@email.com", "senha2"],
    ["emailusuario3@email.com", "senha3"],
]);

let adminAccountLogins = new Map([
    ["emailadmin1@email.com", "senhaadmin1"],
    ["emailadmin2@email.com", "senhaadmin2"],
    ["emailadmin3@email.com", "senhaadmin3"],
]);

const loginButtonElement = document.getElementById("loginButtonElement");
const emailElement = document.getElementById("emailElement");
const passwordElement = document.getElementById("passwordElement");

function checkLoginInfo(loginMap) {
    var emailTyped = emailElement.value;
    var passwordTyped = passwordElement.value;

    for(let [key, value] of loginMap.entries()) {

        if(emailTyped == key && passwordTyped == value) {
            localStorage.setItem("Conta Atual", key);
            return true;
        }

    }

    return false;
}

loginButtonElement.addEventListener("click", function() {
    var loginFuncionou = checkLoginInfo(userAccountLogins) || checkLoginInfo(adminAccountLogins);

    if(loginFuncionou) {
        loginButtonElement.href = "index.html";
    } else {
        const notification = new bootstrap.Toast("#erroLoginNotificacao");
        notification.show();
    }

})