import { createContext, useState } from "react";

export const MenuContextGlobal = createContext()

export const statusMenuMap = {
  0: 'standby',
  1: 'done',
  2: 'delivery',
  3: 'delivered',
}

export const MenuContext = ({children}) => {
  const [indexMenu,setIndexMenu] = useState(0)

  const getStatusMenu = () => {
    return statusMenuMap[indexMenu]
  }

  return (
    <MenuContextGlobal.Provider value={{
      indexMenu,
      setIndexMenu,
      getStatusMenu
    }}>
      {children}
    </MenuContextGlobal.Provider>
  )
}