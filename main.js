const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const card = document.querySelector('.card')
const button = document.querySelector('button')
const cardMessage = document.querySelector('.cardMessage')

const messages = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A vida trará coisas boas se tiver paciência',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
  'A maior de todas as torres começa no solo',
  'Não há que ser forte. Há que ser flexível'
]


function hideFortunaCookie () {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
  card.classList.add('show')
}

function showMessage () {
  const randonNumber = Math.round(Math.random() * 5)

  cardMessage.innerHTML = messages[randonNumber]
}

function hideFortunaOpened () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  card.classList.remove('show')
}

screen1.addEventListener('click', () => {

  hideFortunaCookie()
  showMessage()
})

button.addEventListener('click', hideFortunaOpened) 