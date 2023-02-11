import { Grid} from "@mui/material"
import { Order } from "../Order"

export const Orders = () => {
  return (
    <Grid container spacing={2} justifyContent="center" marginTop={0.5}>
      <Grid item lg={4} md={4}>
        <Order name="Carlos" deadline="18:30"/>
      </Grid>
    </Grid>
  )
}