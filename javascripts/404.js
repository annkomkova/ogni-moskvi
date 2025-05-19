document.addEventListener('DOMContentLoaded', () => {
  createRandomImage()
  returnBack()
})

function returnBack() {
  const back = document.querySelector('.back')

  back.addEventListener('click', () => {
    window.history.back()
  })
}

function createRandomImage() {
  const section = document.querySelector('.object')

  const objects = [
    {
      source: 'images/fond/auto-fonar.jpeg',
      text: 'Автомобильный фонарь'
    },
    {
      source: 'images/fond/bat-fonar.jpg',
      text: 'Фонарь «Летучая мышь»'
    },
    {
      source: 'images/fond/candle-fonar.jpg',
      text: 'Свечной фонарь XIX века'
    },
    {
      source: 'images/fond/careta-fonar.jpg',
      text: 'Каретный фонарь конца XIX века'
    },
    {
      source: 'images/fond/fonar.jpeg',
      text: 'Велосипедный фонарь'
    },
    {
      source: 'images/fond/fonarshik.jpg',
      text: 'Английский фонарщик'
    },
    {
      source: 'images/fond/kerosin-lamps.jpg',
      text: 'Керосиновые лампы конца XIX - начала ХХ века'
    }
  ]

  let index = Math.floor(Math.random() * objects.length)

  const img = document.createElement('img')
  img.src = objects[index].source

  const text = document.createElement('p')
  text.innerText = objects[index].text

  section.appendChild(img)
  section.appendChild(text)
}
