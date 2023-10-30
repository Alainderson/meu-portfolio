const btnMenu = document.querySelector('#btnMenu')
const menu = document.querySelector('#menu')

btnMenu.addEventListener('click', () => {
  if (menu.style.display == "block") {
    menu.style.display = "none"
  } else{
    menu.style.display = "block"
  }
})

menu.addEventListener('click', () => {
  menu.style.display = "none"
})