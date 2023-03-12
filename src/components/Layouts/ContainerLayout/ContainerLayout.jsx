import React from 'react'

const ContainerLayout = ({children}) => {
  return (
    <div className="px-5 sm:px-[4.1rem] relative">
      {children}
    </div>
  )
}

export default ContainerLayout