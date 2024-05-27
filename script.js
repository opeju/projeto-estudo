function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

//pegue a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', "Logo Eloke no escuro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Logo Eloke")
  }

//substituir a imagem. 
}
