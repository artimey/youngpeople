import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../utils/constants';
import { parseHTML } from '../../../utils/parseHTML';

export const ProjectDescription = ({ description, logo, title }) => {

  return (
    <div className="">
      <Row gutter={[40, 0]} >
        <Col span={12} className="hidden sm:block">
          <div className='flex items-start'>
            {
              logo &&
              <img className="w-[32rem] h-[32rem] rounded-full object-contain rotate-[8deg]" src={BASE_URL + logo} alt={title + " логотип"} />
            }

            <Link to="/events" className="text-white inline-flex items-center justify-center bg-brandPink rounded-full text-[1.5rem] leading-[1] text-center w-[18rem] h-[18rem]">
              Мероприятия <br /> проекта
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          {
            description &&
            <div
              className='text-normal text-white mb-[5rem]'
              dangerouslySetInnerHTML={{ __html: parseHTML(description) }}
            />
          }
        </Col>
      </Row>
    </div>
  )
}
