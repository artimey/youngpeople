import { MyFooter } from "../../Footer"
import { Navbar } from "../../Navbar"


export const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
      <MyFooter />
    </div>
  )
}
