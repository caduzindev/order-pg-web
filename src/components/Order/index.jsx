import { Avatar, Button, Card, CardActions, CardHeader, Chip, Grid } from "@mui/material"

export const Order = ({
  name,
  deadline
}) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        title={name}
        subheader={`Prazo: ${deadline}`}

      />
      <CardActions>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Button size="small">Ver detalhes</Button>
          </Grid>
          <Grid>
            <Chip label="Distancia: 26 min" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}