import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { SectionHeading } from '../../../SectionHeading';
import { useGetAllProjectsQuery } from '../../../../app/api/projects';
import { Link } from 'react-router-dom';
import ContainerLayout from '../../../Layouts/ContainerLayout/ContainerLayout';
import { MdOutlineImageNotSupported } from 'react-icons/md';


export const ProjectSlider = () => {
  const { data, isLoading } = useGetAllProjectsQuery();

  return (
    <section className="bg-brandBlue pt-[80px]">
      <ContainerLayout>
        <SectionHeading title={"Наши проекты"} path="/projects" />
      </ContainerLayout>

      {
        data && !isLoading &&
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            426: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {
            Object.values(data).map((item, idx) => {
              return (
                <SwiperSlide key={item.id} className='flex justify-center'>
                  <Link
                    to={`/projects/${idx}`}
                    className='text-center cursor-pointer'
                  >
                    <div className="rounded-full overflow-hidden w-[26rem] h-[26rem] mb-[2.4rem]">
                      {
                        item.img ?
                        <img className="h-full w-full mb-[2.4rem] object-cover" src={item.img} alt={item.title} />
                        :
                        <div className="w-[26rem] h-[26rem] bg-white8 flex justify-center items-center">
                          <MdOutlineImageNotSupported className="text-[3.5rem] text-slate-300" />
                        </div>
                      }
                    </div>
                    <div className='text-[2rem] leading-[2.5rem] font-[500] text-white50 hover:text-white text-center'>{item.title}</div>
                  </Link>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      }
    </section>
  )
}
