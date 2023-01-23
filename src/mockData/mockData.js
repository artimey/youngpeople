import org1 from '../img/LOGO.png'
import org2 from '../img/LOGO-1.png'
import org3 from '../img/LOGO-2.png'

import cardImage1 from '../img/events/event1.jpg'
import cardImage2 from '../img/events/event2.jpg'
import cardImage3 from '../img/events/event3.jpg'

const event1Html = `
<p>Студентов и Татьян приглашают на главные городские катки. Для них приготовили особенные условия по билетам.</p>
<strong>Катки в парках</strong>
<p>Бесплатный вход и прокат коньков на 28 катках для студентов очной формы обучения и Татьян. Для этого нужно показать студенческий билет или удостоверение личности (Татьянам).</p>
<strong>Каток ВДНХ</strong>
<p>
Скидки на билеты для студентов и бесплатный вход для студенток Татьян, нужно показать студенческий билет или удостоверение личности (Татьянам).
Еще на катках можно будет посмотреть первый межуниверситетский хоккейный турнир в формате три на три, поучаствовать в студенческом SMM-марафоне и других активностях.
</p>
<strong>Начало в 17:00.</strong>
`

const event2Html = `
<p>Приключение для студентов столицы.</p>
<p>
  Студентов Москвы ждет квест, где расскажут об истории и формировании культуры России. 
  Можно будет поиграть в традиционные игры (кила, змейка), посоревноваться в перетягивании каната, 
  научиться русским народным танцам и пообщаться с 
  героями России (военачальниками армии и флота, участниками Афганской войны и другими).
</p>

<strong>
  Кнопка Участвовать: <a href="https://molodejm-event.timepad.ru/event/2297592/">https://molodejm-event.timepad.ru/event/2297592/</a>
</strong>
`

const event3Html = `
<p>Спортивно-интеллектуальное испытание «Гонка универов»</p>
<p>Команды студентов приглашают побороться за ценные призы.</p>
<p>Участников ждут три состязания:</p>
<ul>
  <li>— «Инженерная гонка»</li>
  <li>— «Интеллектуальный квест»</li>
  <li>— «Спортивная полоса препятствий»</li>
</ul>
<p>
Больше информации — в нашей группе в социальной сети ВКонтакте. Собирайте команду и регистрируйтесь для участия.
</p>
<strong>
Кнопка Участвовать: <a href="https://molodejm-event.timepad.ru/event/2297579/">https://molodejm-event.timepad.ru/event/2297579/</a>
</strong>
`

export const allEventsData = {
  "student-day": {
  title: "День московского студента",
  img: cardImage1,
  date: "20-21 Декабря",
  place: "Арка Главного входа ВДНХ",
  org: "Музей современного искусства «Гараж»",
  orgImg: org1,
  slug: "student-day",
  html: event1Html,
 }, 
 "history-moscow": {
  title: "Москва историческая",
  img: cardImage2,
  date: "24 Декабря, 19:00",
  place: "Парк Горького",
  org: "Министерство просвещения Российской Федерации",
  orgImg: org2,
  slug: "history-moscow",
  html: event2Html,
 }, 
 "sport-moscow": {
  title: "Москва спортивная",
  img: cardImage3,
  date: "1,2,3,4 января, 21:00 – 22:00",
  place: "Красная площадь",
  org: "«Молодежь Москвы»",
  orgImg: org3,
  slug: "sport-moscow",
  html: event3Html,
 }, 
}

// export const allEventsData = [
//   {
//     title: "День московского студента",
//     img: cardImage1,
//     date: "20-21 Декабря",
//     place: "Арка Главного входа ВДНХ",
//     org: "Музей современного искусства «Гараж»",
//     orgImg: org1,
//     slug: "student-day"
//   },
//   {
//     title: "Москва историческая",
//     img: cardImage2,
//     date: "24 Декабря, 19:00",
//     place: "Парк Горького",
//     org: "Министерство просвещения Российской Федерации",
//     orgImg: org2,
//     slug: "history-moscow"
//   },
//   {
//     title: "Москва спортивная",
//     img: cardImage3,
//     date: "1,2,3,4 января, 21:00 – 22:00",
//     place: "Красная площадь",
//     org: "«Молодежь Москвы»",
//     orgImg: org3,
//     slug: "sport-moscow"
//   },
// ]