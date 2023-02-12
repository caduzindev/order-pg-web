import { useContext } from "react"
import { MenuContextGlobal } from "../../contexts/menu"
import { StandBy } from './StandBy'
import { Done } from './Done'
import { Delivery } from './Delivery'
import { Delivered } from './Delivered'

let OrderMap = {
  'standby': <StandBy />,
  'done': <Done />,
  'delivery': <Delivery />,
  'delivered': <Delivered />,
}

export const Orders = () => {
  const { getStatusMenu } = useContext(MenuContextGlobal)
  return <>{OrderMap[getStatusMenu()]}</>
}