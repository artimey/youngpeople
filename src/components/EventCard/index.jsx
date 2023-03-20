import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../../img/calendar.svg";
import { ReactComponent as Place } from "../../img/place.svg";
import org1 from "../../img/logo.svg";
import { MdOutlineImageNotSupported } from "react-icons/md";

import styles from "../EventsSlider/style.module.scss";
import { transformDate } from "../../utils/helpers";

export const EventCard = ({ item }) => {
  return (
    <Col xs={24} sm={12} md={8} span={8}>
      <div className={styles.eventCard}>
        <div className="p-[12px] mb-[15px]">
          <div className="rounded-[3rem] w-full h-[25rem] overflow-hidden">
            {item.hasImg ? (
              <img
                className="h-full w-full object-cover transition-all hover:scale-110"
                src={item.img}
                alt="alt"
              />
            ) : (
              <div className="w-full h-full bg-black16 flex justify-center items-center text-[5rem]">
                <MdOutlineImageNotSupported />
              </div>
            )}
          </div>
        </div>

        <div className="px-[24px] mb-[12.5rem]">
          <Link to={`/events/${item.slug}`} className={styles.eventTitle}>
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </Link>

          <div className={styles.info}>
            <Calendar className="mr-[14.5px]" />
            {transformDate(item.dateStart)}
          </div>

          <div className={styles.info}>
            <Place className="mr-[14.5px]" />
            {item.place}
          </div>
        </div>

        <div className={styles.org}>
          {item.org ? (
            <>
              <img className="" src={item.orgLogo || org1} alt={item.org} />
              <span>{item.org}</span>
            </>
          ) : (
            <Link to={`/events/${item.slug}`} className="text-brandPink">
              Подробнее
            </Link>
          )}
        </div>
      </div>
    </Col>
  );
};
