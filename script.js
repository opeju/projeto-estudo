function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

//pegue a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', "Um cara estranho de óculos escuro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Um cara estranho")
  }

//substituir a imagem. 
}
