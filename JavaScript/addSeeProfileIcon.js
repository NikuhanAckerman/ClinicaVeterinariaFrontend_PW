const navbarElement = document.getElementById("nav");
const emailLoggedIn = localStorage.getItem("Conta Atual");

if(emailLoggedIn != null) {
    const loginElement = document.getElementById("loginElement");
    loginElement.remove();

    const navLinkDiv = document.getElementById("nav-link-div");
    
    const profileElement = document.createElement("a");
    profileElement.classList.add("nav-link");
    profileElement.classList.add("standard-font");
    profileElement.href = "profile.html";
    profileElement.id = "profileElement";
    profileElement.textContent = "Ver Perfil ";
    const iconTag = document.createElement("i");
    iconTag.classList.add("bi");
    iconTag.classList.add("bi-person")
    profileElement.appendChild(iconTag);
    navLinkDiv.appendChild(profileElement);

    const logoutElement = document.createElement("a");
    logoutElement.classList.add("nav-link");
    logoutElement.classList.add("standard-font");
    logoutElement.id = "profileElement";
    logoutElement.textContent = "Sair ";
    const iconExitTag = document.createElement("i");
    iconExitTag.classList.add("bi");
    iconExitTag.classList.add("bi-box-arrow-right")
    logoutElement.appendChild(iconExitTag);
    navLinkDiv.appendChild(logoutElement);

    
}