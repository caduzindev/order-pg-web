import { useContext } from "react"
import { MenuContextGlobal } from "../../contexts/menu"
import { StandBy } from './StandBy'
import { Done } from './Done'
import { Delivery } from './Delivery'
import { NotDelivery } from './NotDelivery'

let OrderMap = {
  'standby': <StandBy />,
  'done': <Done />,
  'delivery': <Delivery />,
  'notdelivery': <NotDelivery />,
}

export const Orders = () => {
  const { getStatusMenu } = useContext(MenuContextGlobal)
  return <>{OrderMap[getStatusMenu()]}</>
}