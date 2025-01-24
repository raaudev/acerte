/* Inicializando o EmailJS com o seu user ID
(function() {
    emailjs.init("JRuZheJo1uRuOfegh"); // Substitua pelo seu User ID do EmailJS
  })();
  
  // Função para enviar o formulário
  document.getElementById("btnEnviar").addEventListener("click", function() {
    // Pegando os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;
    const categoria = document.getElementById("categoria").value;
    const credito = document.getElementById("credito").value;
    const entrada = document.getElementById("entrada").value;
    const parcelas = document.getElementById("parcelas").value;
  
    // Verificando se todos os campos obrigatórios estão preenchidos
    if (nome && email && mensagem && categoria && credito && entrada && parcelas) {
      // Criando o objeto para enviar ao EmailJS
      const params = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        categoria: categoria,
        credito: credito,
        entrada: entrada,
        parcelas: parcelas
      };
  
      // Enviando o email com os dados do formulário
      emailjs.send("service_njjly8g", "service_njjly8g", params)
        .then(function(response) {
          console.log("Sucesso ao enviar o email", response);
          alert("Formulário enviado com sucesso!");
        }, function(error) {
          console.error("Erro ao enviar o email", error);
          alert("Houve um erro ao enviar o formulário. Tente novamente.");
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }); */

  // Inicializando o EmailJS com seu User ID
emailjs.init("JRuZheJo1uRuOfegh");

const formularioModal = document.getElementById("formulario-modal");
const modal = document.getElementById("modal");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const credito = document.getElementById("credito");
const entrada = document.getElementById("entrada");
const parcelas = document.getElementById("parcelas");
const categoria = document.getElementById("categoria");

// Botão de envio para abrir o modal
const btnEnviar = document.getElementById("btnEnviar");
const fechar = document.getElementById("fechar");

// Função para abrir o modal
btnEnviar.addEventListener("click", function() {
    modal.style.display = "block"; // Mostra o modal
});

// Função para fechar o modal
fechar.addEventListener("click", function() {
    modal.style.display = "none"; // Fecha o modal
});

// Fecha o modal se clicar fora da área do conteúdo
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Fecha o modal ao clicar fora
    }
});

// Previne o envio do formulário até que os campos estejam preenchidos
formularioModal.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão

    // Verifica se os campos obrigatórios estão preenchidos
    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        telefone.value.trim() === ""
    ) {
        alert("Por favor, preencha os campos obrigatórios (Nome, E-mail e Telefone).");
        return; // Para se algum campo estiver vazio
    }

    // Dados a serem enviados para o EmailJS
    const templateParams = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        mensagem: mensagem.value,
        credito: credito.value,
        entrada: entrada.value,
        parcelas: parcelas.value,
        categoria: categoria.value,
    };

    // Enviando via EmailJS
    emailjs
        .send("service_njjly8g", "template_w9gv76", templateParams)
        .then(
            function (response) {
                alert("Formulário enviado com sucesso!");
                console.log("Sucesso!", response.status, response.text);

                // Fecha o modal e reseta o formulário
                modal.style.display = "none";
                formularioModal.reset();
            },
            function (error) {
                alert("Erro ao enviar o formulário. Por favor, tente novamente.");
                console.error("Erro no envio:", error);
            }
        );
});