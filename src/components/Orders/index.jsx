import { Grid } from "@mui/material"
import { useContext } from "react"
import { MenuContextGlobal } from "../../contexts/menu"
import { Order } from "../Order"

export const Orders = () => {
  const { getStatusMenu } = useContext(MenuContextGlobal)
  return (
    <Grid container spacing={2} justifyContent="center" marginTop={0.5}>
      <Grid item lg={4} md={4}>
        {getStatusMenu() === 'standby' && (
          <Order name="Carlos" deadline="18:30"/>
        )}
        {getStatusMenu() === 'done' && (
          <Order name="Jose" deadline="18:30"/>
        )}
        {getStatusMenu() === 'delivery' && (
          <Order name="Paulo" deadline="18:30"/>
        )}
        {getStatusMenu() === 'notdelivered' && (
          <Order name="Joe" deadline="18:30"/>
        )}
      </Grid>
    </Grid>
  )
}