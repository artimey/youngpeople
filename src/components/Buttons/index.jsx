import { Button } from "antd"


const Btn = ({children}) => {
  return (
    <Button type="primary">
      { children }
    </Button>
  )
}

export default Btn;