import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx';
import 'swiper/css';


export const EventPageSlider = ({ images }) => {

  if (!images) return null;

  return (
    <div className="mb-[5rem]">
      <Swiper
          onInit={(swiper) => {
            swiper.slideTo(1)
          }}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={5}
          style={{padding: "8rem 0"}}
          breakpoints={{
            426: {
              slidesPerView: 2,
            },
          }}
    
        >

          {
            images?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img className={clsx("w-full rounded-[3.3rem] max-h-[40rem] object-cover", idx % 2 === 0 ? "rotate-1" : "-rotate-1")} src={item} alt="img" />
                </SwiperSlide>
              )
            })
          }

        </Swiper>
    </div>
  )
}
