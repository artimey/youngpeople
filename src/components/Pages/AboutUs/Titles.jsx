import messageIcon from '../../../img/mes.svg';
import localStyles from './style.module.scss';

export const Titles = () => {
  return (
    <div className={`${localStyles.temporary}`}>
      <div className={localStyles.top}>
        <span>Проектный офис «Молодежь Москвы»</span>
        <span>– место твоей реализации</span>
      </div>
      <div className={localStyles.bottom}>
        <span>
          Наша цель — выявлять
          <br />и реализовывать запросы
          <br />
          молодого поколения столицы.
        </span>
        <span>
          В рамках работы ведется 10 проектов,
          <br />а наши активисты регулярно
          <br />
          принимают участие в организации
          <br />
          акций и крупных событий города
        </span>
        <a
          href="https://www.mos.ru/kos/function/rabota-s-molodezhyu/proektnyi-ofis/"
          target="_blank"
          className={`${localStyles.tlink}`}
        >
          <img src={messageIcon} alt="logo" />
          <span className="text-center">
            Читать о нас
            <br />
            на Mos.ru
          </span>
        </a>
      </div>
    </div>
  );
};
