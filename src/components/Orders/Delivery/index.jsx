import { Grid } from "@mui/material"
import { useQuery } from "react-query"
import { OrderServiceApi } from "../../../services/api/order"
import { Order } from "../../Order"

export const Delivery = () => {
  const { data,isLoading,isError,error } = useQuery('delivery', async ()=> OrderServiceApi.getAllFilter({status: 'delivery'}),{
    cacheTime: 1000,
    refetchInterval: 5000
  })
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
     <Grid container spacing={2} justifyContent="center" marginTop={0.5}>
        {data.map(order=>(
          <Grid item lg={4} md={4} key={order._id}>
            <Order name={order.name} deadline={order.deadline}/>
          </Grid>
        ))}
    </Grid>
  )
}