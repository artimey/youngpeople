import { Col, Row } from 'antd'
import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import { MainLayout } from '../../Layouts/MainLayout'
import { CoWorkingContent } from './CoWorkingContent'
import { CoWorkingForm } from './CoWorkingForm'
import { CowWorkingHeader } from './CowWorkingHeader'

export const CoWorkingBooking = () => {
  return (
    <MainLayout>
      <CowWorkingHeader />

      <section className="bg-brandBlue py-[8rem]">
        <ContainerLayout>
          <Row gutter={[48, 16]}>
            <Col span={11}>
              <CoWorkingContent />
            </Col>

            <Col span={12} className="ml-auto">
              <CoWorkingForm />
            </Col>
          </Row>
        </ContainerLayout>
      </section>
    </MainLayout>
  )
}
