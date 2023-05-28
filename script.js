function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("ligth")) {
    html.classList.remove("ligth")
  } else {
    html.classList.add("ligth")
  }
  */
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  // se tiver light mode, adicionar a imagem ligth
  // se tiver sem light mode, manter a imagem normal

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
