let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome válido!"); 
    } else {
        amigos.push(nome); 
        inputNome.value = ""; 
        atualizarLista(); 
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear!"); 
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 
 
    const liResultado = document.createElement("li");
    liResultado.textContent = `Amigo Sorteado: ${amigoSorteado}`;
    resultadoLista.appendChild(liResultado);
}
