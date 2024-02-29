

colorButton.addEventListener('click', function() {
  // Générer une couleur aléatoire en format hexadécimal
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  // Changer la couleur du bouton
  colorButton.style.backgroundColor = randomColor;
});