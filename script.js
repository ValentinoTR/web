function mostrarMensajeSi() {
  document.getElementById('mensaje-si').style.display = 'block';
}

function moverNo() {
  var noBtn = document.getElementById('no-btn');
  var posX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  var posY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.position = 'absolute';
  noBtn.style.left = posX + 'px';
  noBtn.style.top = posY + 'px';
  document.getElementById('mensaje-no').style.display = 'block';
}
