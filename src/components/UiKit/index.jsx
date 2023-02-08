import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { FieldButton, SliderButton } from './Buttons'

export const UiKit = () => {

  const test = (e) => {
    console.log(e)
    console.log('12312312312')
  }

  return (
    <div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton className="mr-10" onClick={test}>
          Стать партнером
        </FieldButton>

        <a href="https://google.com" target="_blank">
          <FieldButton right={true} className="mr-10">
            Классическая ссылка
          </FieldButton>
        </a>

        <Link to="/">
          <FieldButton left={true} className="mr-10">
            Обернута в Link
          </FieldButton>
        </Link>

        <FieldButton view={true}>sasa </FieldButton>
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton type='bg8' className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg8' right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg8' left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg8' view={true} />
      </div>

      <div className="bg-brandPink py-[100px] pl-[100px]">
        <FieldButton type='bg16' className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg16' right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg16' left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bg16' view={true} />
      </div>

      <div className="bg-brandBlue py-[100px] pl-[100px]">
        <FieldButton type='bgPink' className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgPink' right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgPink' left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgPink' view={true} />
      </div>

      <div className="bg-white py-[100px] pl-[100px]">
        <FieldButton type='bgBlueLight' className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgBlueLight' right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgBlueLight' left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgBlueLight' view={true} />
      </div>

      <div className="bg-white py-[100px] pl-[100px]">
        <FieldButton type='bgRed' className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgRed' right={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgRed' left={true} className="mr-10">
          Стать партнером
        </FieldButton>

        <FieldButton type='bgRed' view={true} />
      </div>

      <div className='bg-brandBlue py-[100px] pl-[100px]'>
        <SliderButton left />
        <SliderButton />
      </div>

    </div>
  )
}
