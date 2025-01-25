const clientes = document.querySelectorAll('.cliente');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');

let indiceAtual = 0;

// Função para mostrar o cliente atual
function mostrarCliente(index) {
  clientes.forEach((cliente, i) => {
    cliente.classList.remove('ativo');
    if (i === index) {
      cliente.classList.add('ativo');
    }
  });
}

// Função para verificar se o cliente atual é um vídeo
function clienteAtualEhVideo() {
  return clientes[indiceAtual].querySelector('video') !== null;
}

// Navegação manual
anterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + clientes.length) % clientes.length;
  mostrarCliente(indiceAtual);
});

proximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % clientes.length;
  mostrarCliente(indiceAtual);
});

// Navegação automática (apenas para imagens)
setInterval(() => {
  if (!clienteAtualEhVideo()) {
    indiceAtual = (indiceAtual + 1) % clientes.length;
    mostrarCliente(indiceAtual);
  }
}, 30000); // Troca a cada 30 segundos