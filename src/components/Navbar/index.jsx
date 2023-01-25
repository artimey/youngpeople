import { useRef } from 'react';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { useClickOutside } from '../hooks';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';
import styles from './style.module.scss';

export const Navbar = () => {

  const [isNav, setIsNav] = useState(false)
  const navBodyRef = useRef();

  useClickOutside(navBodyRef, () => setIsNav(false));

  return (
    <>
      <nav className={`${styles.navDesktop} absolute top-0 left-0 w-full z-[99999] py-[24px] nav-desktop`}>
        <ContainerLayout>
          <div className="flex items-center justify-between text-[1.7rem] font-[500] text-white">
            <span className="flex items-center">
              <Logo className="mr-[2.4rem]" width={'6.4rem'} height={'6.4rem'} />
              <div className="flex flex-col flex-nowrap justify-between h-[6.4rem]">
                <div className={styles.topMenu}>
                  <Link to={'/'} className="hover:text-brandPink text-white50 mr-[1.6rem]">
                    ВКонтакте
                  </Link>
                  <Link to={'/'} className="hover:text-brandPink text-white50">
                    Telegram
                  </Link>
                </div>
                <div>
                  <Link to={'/'} className="hover:text-brandPink mr-[1.6rem]">
                    Главная
                  </Link>
                  <Link
                    to={'/events'}
                    className="hover:text-brandPink mr-[1.6rem]"
                  >
                    Мероприятия
                  </Link>
                  <Link
                    to={'/about'}
                    className="hover:text-brandPink mr-[1.6rem]"
                  >
                    О нас
                  </Link>
                  <Link to={'/co-working-zones'} className="hover:text-brandPink">
                    Пространства
                  </Link>
                </div>
              </div>
            </span>

            {/* <Link
            to={'/events'}
            className="font-[1.5rem] text-black bg-white px-[2.4rem] py-[1.4rem] 
              rounded-[3rem] hover:text-white hover:bg-brandPink"
          >
            Действующие мероприятия
          </Link> */}
          </div>
        </ContainerLayout>
      </nav>

      <nav className={styles.navMobile} ref={navBodyRef}>

        <div className='flex items-center justify-between'>
          <Logo className="mr-[2.4rem]" width={'6.4rem'} height={'6.4rem'} />

          <button onClick={() => setIsNav(prev => prev = !prev)}>
            <svg width="60" height="44" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="21.667" y="27" width="16.6667" height="1.66667" fill="white" />
              <rect x="21.667" y="21.1667" width="16.6667" height="1.66667" fill="white" />
              <rect x="21.667" y="15.3333" width="16.6667" height="1.66667" fill="white" />
              <rect x="1" y="1" width="58" height="42" rx="21" stroke="white" strokeOpacity="0.08" strokeWidth="2" />
            </svg>
          </button>
        </div>


        {
          isNav &&
          <div className={styles.navBody} >
            <Link to={'/'} className="hover:text-brandPink mr-[1.6rem]">
              Главная
            </Link>
            <Link
              to={'/events'}
              className="hover:text-brandPink mr-[1.6rem]"
            >
              Мероприятия
            </Link>
            <Link
              to={'/about'}
              className="hover:text-brandPink mr-[1.6rem]"
            >
              О нас
            </Link>
            <Link to={'/co-working-zones'} className="hover:text-brandPink">
              Пространства
            </Link>

            <div className='h-1 w-[50%] mx-auto my-[3rem] border-t-2 border-white8 px-[100px]'></div>

            <Link to={'/'} className="hover:text-brandPink text-white50">
              ВКонтакте
            </Link>
            <Link to={'/'} className="hover:text-brandPink text-white50">
              Telegram
            </Link>
          </div>
        }

      </nav>
    </>
  );
};
