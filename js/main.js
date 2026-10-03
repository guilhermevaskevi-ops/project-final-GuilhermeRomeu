
document.getElementById("ano").textContent = new Date().getFullYear();

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    alert("Obrigado pela mensagem, " + nome + "!");
    this.reset();
});
