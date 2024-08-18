function mostrarNome(){
    let input = document.getElementById("nome");
    let input2 = document.getElementById("email")
    let nome = input.value;
    let email = input2.value;
    document.getElementById("resultado").textContent = "Bem-vindo(a) ao site, " + nome + ". " + email

}
