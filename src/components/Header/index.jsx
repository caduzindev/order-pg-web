import { Tab, Tabs } from "@mui/material"
import { useContext } from "react";
import { MenuContextGlobal } from "../../contexts/menu";

export const Header = () => {
  const { indexMenu,setIndexMenu } = useContext(MenuContextGlobal)
  return (
    <Tabs value={indexMenu} onChange={(_,value)=>setIndexMenu(value)} scrollButtons="auto" variant="scrollable">
      <Tab label="Cozinha"/>
      <Tab label="Pronto"/>
      <Tab label="Na Entrega"/>
      <Tab label="Entregue"/>
    </Tabs>
  )
}