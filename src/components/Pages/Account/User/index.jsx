import React from 'react'
import { AccountLayout } from '../../../Layouts/AccountLayout/AccountLayout'
import { UserSidebar } from './UserSidebar'
import { UserTabHeader } from './UserTabHeader'

export const User = () => {
  return (
    <AccountLayout
      tabs={<UserSidebar />}
      tabHeader={<UserTabHeader />}
    />
  )
}
