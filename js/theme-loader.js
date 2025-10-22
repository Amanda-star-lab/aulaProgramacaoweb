(function() {
  const html = document.documentElement; 

  const modoContrasteSalvo = localStorage.getItem('alto-contraste');
  const modoEscuroSalvo = localStorage.getItem('modo-escuro');

  // PRIORIDADE 1: Alto Contraste
  if (modoContrasteSalvo === 'true') {
    html.classList.add('alto-contraste');
  } 
  // PRIORIDADE 2: Modo Escuro
  else if (modoEscuroSalvo === 'true') {
    html.classList.add('modo-escuro');
  }
})();