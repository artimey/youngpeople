import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BASE_URL } from '../../../utils/constants'
import 'swiper/css';

export const ProjectSlider = ({ images }) => {

  return (
    <div className="mb-[5rem]">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {
          images?.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img className="w-full" src={BASE_URL + item} alt="img" />
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}
