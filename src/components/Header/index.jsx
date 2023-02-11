import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  return (
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Cozinha"/>
      <Tab label="Pronto"/>
      <Tab label="Na Entrega"/>
      <Tab label="Entregue"/>
    </Tabs>
  </Box>
  )
}