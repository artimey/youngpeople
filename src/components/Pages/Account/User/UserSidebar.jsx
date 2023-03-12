import React from 'react'
import { userSidebarData } from '../../../../mockData/userAccount'
import { LkNavButton } from '../../../UiKit/Cards/LkNavButton/LkNavButton'

export const UserSidebar = () => {
  return (
    <>
      {
        userSidebarData.map(item => {
          return <LkNavButton key={item.id} data={item} />
        })
      }
    </>
  )
}
