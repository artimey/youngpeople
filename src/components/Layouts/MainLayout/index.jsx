import { MyFooter } from "../../Footer"
import { Navbar } from "../../Navbar"


export const MainLayout = ({children, isHaveFooter=true}) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
      {isHaveFooter && <MyFooter />}
    </div>
  )
}
