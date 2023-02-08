import org1 from '../img/LOGO.png'
import org2 from '../img/LOGO-1.png'
import org3 from '../img/LOGO-2.png'

import cardImage1 from '../img/events/event1.jpg'
import cardImage2 from '../img/events/event2.jpg'
import cardImage3 from '../img/events/event3.jpg'

import conferenceRoom from '../img/cowworkingZones/peregovrka.png';
import livingRoom from '../img/cowworkingZones/livingroom.png';
import contentFarm from '../img/cowworkingZones/contentFarm.png';
import videoStudio from '../img/cowworkingZones/DSC05686.png';
import sport from '../img/cowworkingZones/sport.png';
import coworkingImage from '../img/cowworkingZones/coworking.png';

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
  date: "25 января",
  place: "Парк Горького и ВДНХ",
  org: "Музей современного искусства «Гараж»",
  orgImg: org1,
  slug: "student-day",
  html: event1Html,
 }, 
 "history-moscow": {
  title: `Квест «Москва историческая»`,
  img: cardImage2,
  date: "26 января",
  place: "По Москве",
  org: "Министерство просвещения Российской Федерации",
  orgImg: org2,
  slug: "history-moscow",
  html: event2Html,
 }, 
 "sport-moscow": {
  title: "Гонка университетов",
  img: cardImage3,
  date: "27 января",
  place: "По Москве",
  org: "«Молодежь Москвы»",
  orgImg: org3,
  slug: "sport-moscow",
  html: event3Html,
 }, 
}

export const coWorkingZonesData = {
  "coworking": {
    slug: "coworking",
    title: "Коворкинг",
    text: `В поисках комфортного места, чтобы заняться работой или учебой, ты можешь остановиться 
          здесь. Для тебя и твоей команды здесь оборудовано рабочее место с удобным столом и компьютером`,
    img: coworkingImage
  },
  "conference-room": {
    slug: "conference-room",
    title: "Переговорка",
    text: `Место, в котором ты сможешь решать важнейшие вопросы своего проекта, проводить мозговой штурм, 
      встречаться с партнерами и проводить презентации`,
    img: conferenceRoom
  },
  "party-room": {
    slug: "party-room",
    title: "Зал для мероприятий",
    text: `Зал вмещает до 200 человек – проводи лекции и конференции, встречайся 
      с единомышленниками, организовывай концерты и вообще, что только захочешь`,
    img: livingRoom
  },
  "video-studio": {
    slug: "video-studio",
    title: "Видеостудия",
    text: `Пространство для съемок коротких видео и креативных фото. Воплощай свои самые интересные идеи для социальных сетей здесь. 
      Креативное пространство, в котором хочется создавать новый контент`,
    img: videoStudio
  },
  "content-farm": {
    slug: "content-farm",
    title: "Контент ферма",
    text: `В поисках комфортного места, чтобы заняться работой или учебой, ты можешь остановиться 
          здесь. Для тебя и твоей команды здесь оборудовано рабочее место с удобным столом и компьютером`,
    img: contentFarm
  },
  "sport-room": {
    slug: "sport-room",
    title: "Спортивный зал",
    text: `Ставь свою хореографию, готовься к конкурсам или просто поддерживай здоровый образ жизни. 
    Не останавливайся и продолжай находиться в постоянном движении`,
    img: sport
  },
}

export const districts =[
  {value:'Центральный',label:'Центральный'},
  {value:'Северный',label:'Северный'},
  {value:'Северо-Восточный',label:'Северо-Восточный'},
  {value:'Восточный',label:'Восточный'},
  {value:'Юго-Восточный',label:'Юго-Восточный'},
  {value:'Южный',label:'Южный'},
  {value:'Юго-Западный',label:'Юго-Западный'},
  {value:'Западный',label:'Западный'},
  {value:'Северо-Западный',label:'Северо-Западный'},
  {value:'Зеленоградский',label:'Зеленоградский'},
  {value:'Троицкий',label:'Троицкий'},
  {value:'Новомосковский',label:'Новомосковский'},
]