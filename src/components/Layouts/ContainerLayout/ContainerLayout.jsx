import React from 'react'

const ContainerLayout = ({children}) => {
  return (
    <div className="px-5 sm:px-[41px] relative">
      {children}
    </div>
  )
}

export default ContainerLayout