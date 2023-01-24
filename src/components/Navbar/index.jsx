import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';
import styles from './style.module.scss';

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-[99999] py-[24px]">
      <ContainerLayout>
        <div className="flex items-center justify-between text-[1.7rem] font-[500] text-white">
          <span className="flex items-center">
            <Logo className="mr-[2.4rem]" width={'6.4rem'} height={'6.4rem'} />
            <div className="flex flex-col flex-nowrap justify-between h-[6.4rem]">
              <div className={styles.topMenu}>
                <Link to={'/'} className="hover:text-brandPink mr-[1.6rem]">
                  Главная
                </Link>
                <Link to={'/'} className="hover:text-brandPink mr-[1.6rem]">
                  ВКонтакте
                </Link>
                <Link to={'/'} className="hover:text-brandPink">
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
  );
};
