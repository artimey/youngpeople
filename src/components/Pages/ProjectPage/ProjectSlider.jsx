import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BASE_URL } from '../../../utils/constants'
import clsx from 'clsx';
import 'swiper/css';


export const ProjectSlider = ({ images }) => {

  if (!images) return null;

  return (
    <div className="mb-[5rem] select-none">
      <Swiper
          onInit={(swiper) => {
            swiper.slideTo(1)
          }}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          style={{padding: "8rem 0"}}
          loopAdditionalSlides={5}
        >

          {
            images?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img className={clsx("w-full rounded-[3.3rem] max-h-[40rem] object-cover", idx % 2 === 0 ? "rotate-1" : "-rotate-1")} src={BASE_URL + item} alt="img" />
                </SwiperSlide>
              )
            })
          }

        </Swiper>
    </div>
  )
}
