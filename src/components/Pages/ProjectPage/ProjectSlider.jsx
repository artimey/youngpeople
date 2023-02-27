import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BASE_URL } from '../../../utils/constants'
import clsx from 'clsx';
import 'swiper/css';


export const ProjectSlider = ({ images }) => {

  console.log("imagesimagesimages", images);

  if (!images) return null;

  return (
    <div className="mb-[5rem]">
      <Swiper
          onInit={(swiper) => {
            swiper.slideTo(1)
          }}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={5}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >

          {
            images?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img className={clsx("w-full", idx % 2 === 0 ? "rotate-2" : "-rotate-2")} src={BASE_URL + item} alt="img" />
                </SwiperSlide>
              )
            })
          }

        </Swiper>
    </div>
  )
}
