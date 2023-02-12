import { Avatar, Button, Card, CardActions, CardHeader, Chip, Grid } from "@mui/material"
import { useContext } from "react"
import { MenuContextGlobal } from '../../contexts/menu'
import { styleOrderMap } from "./styles"
export const Order = ({
  name,
  deadline
}) => {
  const { getStatusMenu } = useContext(MenuContextGlobal)
  const styles = styleOrderMap[getStatusMenu()]
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeader}
        avatar={
          <Avatar aria-label="recipe" sx={styles.avatar}>
            P
          </Avatar>
        }
        title={name}

      />
      <CardActions>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Button size="small" sx={styles.button}>Ver detalhes</Button>
          </Grid>
          <Grid>
            <Chip label="Distancia: 26 min" sx={styles.chip}/>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}