import ContainerLayout from '../ContainerLayout/ContainerLayout'
import { MainLayout } from '../MainLayout'

export const AccountLayout = ({ tabs, tabHeader, content }) => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className="flex flex-col md:flex-row py-[13rem]">
          <div className='min-w-[22.5rem] inline-flex overflow-auto md:block md:overflow-visible md:mr-[8rem] mb-[4.8rem] md:mb-0'>
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
