import { Grid } from "@mui/material"
import { useState } from "react"
import { useQuery } from "react-query"
import { OrderServiceApi } from "../../../services/api/order"
import { Order } from "../../Order"

export const Done = () => {
  const [changeStatus,setChangeStatus] = useState(false)
  const { data,isLoading,isError,error } = useQuery('done', async ()=> OrderServiceApi.getAllFilter({status: 'done'}),{
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
     <>
      {!changeStatus && (
        <>
        <Grid container spacing={2} justifyContent="center" marginTop={0.5}>
            {data.map(order=>(
              <Grid item lg={4} md={4} key={order._id}>
                <Order
                  id={order._id}
                  name={order.name}
                  phone={order.phone}
                  deadline={order.deadline}
                  address={order.address}
                  burguers={order.burguers}
                  durationText={order.durationText}
                  status={order.status}
                  setChangeStatus={setChangeStatus}
                />
              </Grid>
            ))}
        </Grid>
        </>
      )}
    </>
  )
}