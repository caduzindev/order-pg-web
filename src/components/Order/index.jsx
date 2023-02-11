import { Avatar, Button, Card, CardActions, CardHeader } from "@mui/material"

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
        <Button size="small">Ver detalhes</Button>
      </CardActions>
    </Card>
  )
}