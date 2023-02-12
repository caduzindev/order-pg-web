import { Box, Tab, Tabs } from "@mui/material"
import { useContext } from "react";
import { MenuContextGlobal } from "../../contexts/menu";

export const Header = () => {
  const { indexMenu,setIndexMenu } = useContext(MenuContextGlobal)
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={indexMenu} onChange={(_,value)=>setIndexMenu(value)} centered>
        <Tab label="Cozinha"/>
        <Tab label="Pronto"/>
        <Tab label="Na Entrega"/>
        <Tab label="Entregue"/>
      </Tabs>
    </Box>
  )
}