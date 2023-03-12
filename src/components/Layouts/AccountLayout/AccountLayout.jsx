import React from 'react'
import ContainerLayout from '../ContainerLayout/ContainerLayout'
import { MainLayout } from '../MainLayout'

export const AccountLayout = ({ tabs, tabHeader, content }) => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className="flex py-[13rem]">
          <div className='min-w-[22.5rem] mr-[8rem]'>
            {tabs}
          </div>
          <div className='w-full'>
            <div>{tabHeader}</div>

            <div>{content}</div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  )
}
