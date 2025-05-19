document.addEventListener('DOMContentLoaded', () => {
  createAfisha()
})

const afisha = [
  {
    date: '17 АПРЕЛЯ (ЧЕТВЕРГ)',
    events: [
      {
        time: '18:00',
        description:
          '<span>МАСТЕР-КЛАССЫ</span> для индивидуальных посетителей.'
      },
      {
        time: '18:30',
        description:
          '<span>ЭКСКУРСИЯ</span> по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      }
    ]
  },
  {
    date: '18 АПРЕЛЯ (ПЯТНИЦА)',
    events: [
      {
        time: '19:30',
        description:
          '<span>МАСТЕР-КЛАССЫ</span> для индивидуальных посетителей.'
      },
      {
        time: '20:00',
        description:
          '<span>ЭКСКУРСИЯ</span> по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      }
    ]
  },
  {
    date: '19 АПРЕЛЯ (СУББОТА)',
    events: [
      {
        time: '12:30',
        description:
          '<span>МАСТЕР-КЛАССЫ</span> для индивидуальных посетителей.'
      },
      {
        time: '13:00',
        description:
          '<span>ЭКСКУРСИЯ</span> по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      }
    ]
  }
]
function createAfisha() {
  afisha.forEach((day) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('event')

    const header = document.createElement('h3')
    header.innerText = day.date
    card.appendChild(header)

    day.events.forEach((event) => {
      const dayEvents = document.createElement('div')
      dayEvents.classList.add('day-events')

      const time = document.createElement('div')
      time.classList.add('day-time')
      time.innerText = event.time

      const description = document.createElement('div')
      description.classList.add('day-description')
      description.innerHTML = event.description

      dayEvents.appendChild(time)
      dayEvents.appendChild(description)
      card.appendChild(dayEvents)
    })

    document.querySelector('#events').appendChild(card)
  })
}
