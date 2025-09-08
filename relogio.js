function atualizarRelogios() {
  const agora = new Date();

  // Brasília
  const brasilia = new Date(agora.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  document.getElementById("br-horas").textContent = formatar(brasilia.getHours());
  document.getElementById("br-minutos").textContent = formatar(brasilia.getMinutes());
  document.getElementById("br-segundos").textContent = formatar(brasilia.getSeconds());

  // China
  const china = new Date(agora.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  document.getElementById("cn-horas").textContent = formatar(china.getHours());
  document.getElementById("cn-minutos").textContent = formatar(china.getMinutes());
  document.getElementById("cn-segundos").textContent = formatar(china.getSeconds());

  // França
  const franca = new Date(agora.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
  document.getElementById("fr-horas").textContent = formatar(franca.getHours());
  document.getElementById("fr-minutos").textContent = formatar(franca.getMinutes());
  document.getElementById("fr-segundos").textContent = formatar(franca.getSeconds());
}

function formatar(valor) {
  return String(valor).padStart(2, "0");
}

setInterval(atualizarRelogios, 1000);
atualizarRelogios();
