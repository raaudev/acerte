// Manipula o envio do formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Dados do formulário
  const formData = {
      categoria: document.getElementById("categoria").value,
      credito: document.getElementById("credito").value,
      entrada: document.getElementById("entrada").value,
      parcelas: document.getElementById("parcelas").value,
      nome: document.getElementById("nome").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value,
  };

  // Envia os dados pelo EmailJS
  emailjs
      .send("service_njjly8g", "template_hj2v8ck", formData)
      .then(
          function (response) {
              alert("Formulário enviado com sucesso!");
              document.getElementById("contactForm").reset(); // Limpa o formulário
          },
          function (error) {
              alert("Ocorreu um erro ao enviar o formulário: " + JSON.stringify(error));
          }
      );
});