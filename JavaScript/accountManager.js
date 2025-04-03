const navbarElement = document.getElementById("nav");
const emailLoggedIn = localStorage.getItem("Conta Atual");

if(emailLoggedIn != null) {
    const loginElement = document.getElementById("loginElement");
    loginElement.remove();

    const modalLogout = `
        <div class="modal fade" id="modal-logout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Sair da conta</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Deseja mesmo sair de sua conta?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Não</button>
                    <button type="button" class="btn btn-danger" id="logoutButton">Sair da conta</button>
                </div>
                </div>
            </div>
        </div>
    `;

    const profileElement = `
        <a class="nav-link standard-font" href="profile.html" id="profileElement">Ver Perfil <i class="bi bi-person"></i> </a>
    `;
    const logoutElement = `
        <button type="button" class="nav-link standard-font" href="profile.html" id="profileElement" data-bs-toggle="modal" 
        data-bs-target="#modal-logout" >Sair <i class="bi bi-box-arrow-right"></i></button>
    `;

    document.body.insertAdjacentHTML("beforeend", modalLogout);

    const navLinkDiv = document.getElementById("nav-link-div");
    navLinkDiv.insertAdjacentHTML("beforeend", profileElement);
    navLinkDiv.insertAdjacentHTML("beforeend", logoutElement);

    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function() {

        localStorage.removeItem("Conta Atual");
        window.location.reload();
        
    })

}



