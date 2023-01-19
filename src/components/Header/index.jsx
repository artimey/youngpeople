import './styles.scss'
import headerImage from '../../img/header.png'
import { Col } from 'antd'
import maskImage from '../../img/maskHeader.png'

export const Header = () => {
  return (
    <header className="bg-brandBlue overflow-hidden w-full relative z-[100] header">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:pt-[152px]">
        <Col span={12}>
          <div className="relative">
            <h1 className="text-[72px] leading-[79.2px] mb-[16px] font-black text-white uppercase">Молодежь Москвы</h1>
            <p className="text-[16px] leading-[21.6px] text-white50 w-[430px] mb-[32px]">
              Мы — команда молодых инициативных ребят, меняющая жизнь к лучшему.
              Запускаем амбициозные проекты и организуем мероприятия для молодёжи с 2020 года
            </p>

            <div className='maskImage'>
              <img src={maskImage} alt="img" />
            </div>
          </div>

          <button className="mr-[12px] py-[21.5px] px-[32px] text-[17px] leading-[21.25px] font-[500] bg-white text-black rounded-[100px]">
            Стать участником
          </button>

          <button className="py-[21.5px] px-[32px] text-[17px] leading-[21.25px] font-[500] bg-white8 text-white rounded-[100px]">
            Стать партнером
          </button>
        </Col>
      </div>

      <div className='headerGradient'></div>

      <div className="headerImage">
        <img src={headerImage} alt="img" />

      </div>

    </header>
  )
}
