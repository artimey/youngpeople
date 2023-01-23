import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { coWorkingZonesData } from '../../../mockData/mockData'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import { MainLayout } from '../../Layouts/MainLayout'
import { CoWorkingContent } from './CoWorkingContent'
import { CoWorkingForm } from './CoWorkingForm'
import { CowWorkingHeader } from './CowWorkingHeader'

export const CoWorkingBooking = () => {
  const {zoneSlug} = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <MainLayout>
      <CowWorkingHeader />

      <section className="bg-brandBlue py-[8rem]">
        <ContainerLayout>
          <Row gutter={[48, 16]}>
            <Col span={11}>
              <CoWorkingContent 
                image={coWorkingZonesData[zoneSlug].img}
                title={coWorkingZonesData[zoneSlug].title}
                text={coWorkingZonesData[zoneSlug].text}
              />
            </Col>

            <Col span={12} className="ml-auto">
              <CoWorkingForm title={coWorkingZonesData[zoneSlug].title}/>
            </Col>
          </Row>
        </ContainerLayout>
      </section>
    </MainLayout>
  )
}
