import React from 'react'
import { MainLayout } from '../../Layouts/MainLayout'
import { CoWorkingZonesHeader } from './CoWorkingZonesHeader'
import { Zones } from './Zones'

export const CoWorkingZones = () => {
  return (
    <MainLayout>
      <CoWorkingZonesHeader />
      <Zones />
    </MainLayout>
  )
}
