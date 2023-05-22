import { useRef } from "react";
import { React, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useClickOutside } from "../../app/hooks/useClickOutside";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { links } from "../../mockData/mockLinks";
import ContainerLayout from "../Layouts/ContainerLayout/ContainerLayout";
import { UserBadge } from "../UserBadge";
import styles from "./style.module.scss";

export const Navbar = ({ isNewsOnePage }) => {
  const { person } = useSelector((s) => s);
  const [isNav, setIsNav] = useState(false);
  const navBodyRef = useRef();
  useClickOutside(navBodyRef, () => setIsNav(false));

  return (
    <>
      <nav
        className={`${styles.navDesktop} ${
          isNewsOnePage ? styles.newsOnePage : ""
        } absolute top-0 left-0 w-full  z-[1000] py-[24px]`}
      >
        <ContainerLayout>
          <div className="flex items-center justify-between text-[1.7rem] font-[500] text-white">
            <span className="flex items-center">
              <Link to="/">
                <Logo
                  className="mr-[2.4rem]"
                  width={"6.4rem"}
                  height={"6.4rem"}
                />
              </Link>
              <div className="flex flex-col flex-nowrap justify-between h-[6.4rem]">
                <div className={styles.topMenu}>
                  <a
                    href="https://vk.com/molodezh_msk"
                    target="_blank"
                    className="hover:text-brandPink text-white50 mr-[1.6rem]"
                    rel="noreferrer"
                  >
                    ВКонтакте
                  </a>
                  <a
                    href="https://t.me/molodezhmsk"
                    target="_blank"
                    className="hover:text-brandPink text-white50"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </div>
                <div>
                  {links.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      className="hover:text-brandPink mr-[1.6rem]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </span>

            {person?.initials ? (
              <UserBadge name={person.initials} user={person.avatar} />
            ) : (
              <Link
                to="/sign_in"
                className="font-[1.5rem] text-black bg-white px-[2.4rem] py-[1.4rem] 
                  rounded-[3rem] hover:text-white hover:bg-brandPink"
              >
                Войти в кабинет
              </Link>
            )}
          </div>
        </ContainerLayout>
      </nav>

      <nav className={styles.navMobile} ref={navBodyRef}>
        <div className="flex items-center justify-between">
          <Logo className="mr-[2.4rem]" width={"6.4rem"} height={"6.4rem"} />

          <button onClick={() => setIsNav((prev) => (prev = !prev))}>
            <svg
              width="60"
              height="44"
              viewBox="0 0 60 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="21.667"
                y="27"
                width="16.6667"
                height="1.66667"
                fill="white"
              />
              <rect
                x="21.667"
                y="21.1667"
                width="16.6667"
                height="1.66667"
                fill="white"
              />
              <rect
                x="21.667"
                y="15.3333"
                width="16.6667"
                height="1.66667"
                fill="white"
              />
              <rect
                x="1"
                y="1"
                width="58"
                height="42"
                rx="21"
                stroke="white"
                strokeOpacity="0.08"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {isNav && (
          <div className={styles.navBody}>
            {links.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="hover:text-brandPink mr-[1.6rem]"
              >
                {item.title}
              </Link>
            ))}

            <div className="h-1 w-[50%] mx-auto my-[3rem] border-t-2 border-white8 px-[100px]"></div>

            <a
              href="https://vk.com/molodezh_msk"
              target="_blank"
              className="hover:text-brandPink text-white50"
              rel="noreferrer"
            >
              ВКонтакте
            </a>
            <a
              href="https://t.me/molodezhmsk"
              target="_blank"
              className="hover:text-brandPink text-white50"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
