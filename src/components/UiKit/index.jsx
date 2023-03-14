import React from "react";
import { Link } from "react-router-dom";
import { FieldButton, FilterButton, SliderButton } from "./Buttons";
import { LkEventCard } from "./Cards/LkEventCard/LkEventCard";
import { LkNavButton } from "./Cards/LkNavButton/LkNavButton";
import { TaskCard } from "./Cards/TaskCard/TaskCard";
import garage from "../../img/LOGO.png";
import minRf from "../../img/LOGO-1.png";
import mosMolodezh from "../../img/LOGO-2.png";
import testImage from "../../img/about/image2.png";
import { CertificateCard } from "./Cards/CertificateCard/CertificateCard";

export const certificateCardData = [
  {
    id: "1234",
    title:
      "Эпидемия одиночества. Как социальные отношения влияют на наше здоровье?",
    org: "Министерство просвещения Российской Федерации",
    isTestDone: true,
    certificateLink: "/",
    logo: minRf,
  },
  {
    id: "4535",
    title: "Эпидемия одиночества.",
    org: "«Молодежь Москвы»",
    isTestDone: false,
    certificateLink: "/",
    logo: mosMolodezh,
  },
  {
    id: "2112",
    title:
      "Эпидемия одиночества. Как социальные отношения. Как социальные отношения влияют на наше здоровье? Как социальные отношения влияют на наше здоровье?",
    org: "Музей современного искусства «Гараж»",
    isTestDone: true,
    certificateLink: "/",
    logo: garage,
  },
  // {
  //   id: "122214",
  //   title: "testImagetestImagetest testImage testImage",
  //   org: "Музей современного искусства «Гараж»",
  //   isTestDone: true,
  //   certificateLink: "/",
  //   logo: testImage,
  // },
];

export const UiKit = () => {
  const test = (e) => {};

  const lkCardData = [
    {
      id: "1",
      title: "Музей «Гараж» запускает виртуальные экскурсии по выставкам",
      date: "20-21 December",
      place: "Арка Главного входа ВДНХ",
      isOffline: true,
    },
    {
      id: "2",
      title: "Экскурсия в кремль c Молодежей Москвы",
      date: "20-21 December",
      place: "Арка Главного входа ВДНХ",
      isOffline: true,
    },
    {
      id: "332",
      title: "Музей «Гараж» запускает виртуальные экскурсии по выставкам",
      date: "20-21 December",
      place: "Арка Главного входа ВДНХ",
      isOffline: false,
    },
  ];

  const taskCardsData = [
    {
      id: "1",
      coinsPrice: 57,
      task: "Небольшое название задания в 3-4 строки коротко описывающее его суть. Небольшое название задания в 3-4",
      type: "purple",
      isDone: true,
    },
    {
      id: "2",
      coinsPrice: 2,
      task: "Небольшое название задания в 3-4 строки коротко описывающее его суть",
      type: "blue",
      isDone: false,
    },
    {
      id: "3",
      coinsPrice: 11,
      task: "Небольшое название задания в 3-4 строки коротко описывающее его суть",
      type: "orange",
      isDone: true,
    },
    {
      id: "4",
      coinsPrice: 64,
      task: "Небольшое название задания в 3-4 строки коротко описывающее его суть",
      type: "pink",
      isDone: false,
    },
    {
      id: "5",
      coinsPrice: 123,
      task: "Небольшое название задания в 3-4 строки коротко описывающее его суть",
      type: "red",
      isDone: false,
    },
  ];

  const lkButtonsData = [
    {
      id: "1",
      type: "events",
      count: 21,
    },
    {
      id: "12",
      type: "myEvents",
      count: 2,
    },
    {
      id: "1132",
      type: "tasks",
      count: 21,
    },
    {
      id: "13123",
      type: "events",
      count: 11,
    },
    {
      id: "123543",
      type: "myEvents",
      count: 22,
    },
    {
      id: "324232",
      type: "changeCoins",
      count: 1,
    },
    {
      id: "12331",
      type: "goals",
      count: 22,
    },
    {
      id: "32223",
      type: "random", // не существет типа
      count: 22,
    },
    {
      id: "26778",
      type: "goals",
      // не указано кол-во
    },
    {
      id: "12341",
      type: "goals",
      count: 45,
    },
    {
      id: "3215721127",
      type: "changeCoins",
      count: 2,
    },
    {
      id: "321577",
      type: "changeCoins",
      count: 45,
    },
  ];

  return (
    <div>
      <div className="bg-brandBlue py-[100px] px-[40px] xl:px-[250px]">
        <FilterButton className="mr-[1.2rem]">Мои мероприятия</FilterButton>
        <FilterButton active className="mr-[1.2rem]">
          Хочу сходить
        </FilterButton>
        <FilterButton className="mr-[1.2rem]">Рекомендации</FilterButton>
        <FilterButton className="mr-[1.2rem]">
          Только для амбассадоров
        </FilterButton>
      </div>

      <div className="bg-brandBlue py-[100px] px-[40px] xl:px-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.6rem]">
          {certificateCardData.map((item) => {
            return <CertificateCard key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className="bg-brandBlue py-[100px] px-[40px] xl:px-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-[1.6rem]">
          {lkButtonsData.map((item) => {
            return <LkNavButton key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className="bg-brandBlue py-[100px] px-[40px] xl:px-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.6rem]">
          {taskCardsData.map((item) => {
            return <TaskCard key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className="bg-brandBlue py-[100px] px-[40px] xl:px-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.6rem]">
          {lkCardData.map((item) => {
            return <LkEventCard key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton className="mr-10" onClick={test}>
          Стать партнером
        </FieldButton>

        <FieldButton
          as="a"
          href="https://google.com"
          right={true}
          className="mr-10"
        >
          Классическая ссылка
        </FieldButton>

        <Link to="/">
          <FieldButton left={true} className="mr-10">
            Обернута в Link
          </FieldButton>
        </Link>

        <FieldButton view={true}>sasa </FieldButton>
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton type="bg8" className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg8" right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg8" left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg8" view={true} />
      </div>

      <div className="bg-brandPink py-[100px] pl-[100px]">
        <FieldButton type="bg16" className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg16" right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg16" left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bg16" view={true} />
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton type="bgPink" className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgPink" right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgPink" left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgPink" view={true} />
      </div>

      <div className="bg-white py-[100px] pl-[100px]">
        <FieldButton type="bgBlueLight" className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgBlueLight" right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgBlueLight" left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgBlueLight" view={true} />
      </div>

      <div className="bg-white py-[100px] pl-[100px]">
        <FieldButton type="bgRed" className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgRed" right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgRed" left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type="bgRed" view={true} />
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <SliderButton left />
        <SliderButton />
      </div>
    </div>
  );
};
