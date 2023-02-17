import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Select,
  Typography
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import { useState } from "react"
import { styleOrderMap } from "./styles"
import { statusOrder as statusOrderModel, statusOrderTranslate } from "../../models/order";
import { useMutation } from "react-query";
import { OrderServiceApi } from "../../services/api/order";

export const Order = ({
  id,
  name,
  phone,
  address,
  deadline,
  status,
  burguers,
  durationText
}) => {
  const [open,setOpen] = useState(false)
  const [statusOrder,setStatusOrder] = useState(status)
  const styles = styleOrderMap[status]
  const generalStyles = styleOrderMap['general']
  const mutation = useMutation(data => OrderServiceApi.updateStatusOrder(data.id,data.status))
  const [changeStatus,setChangeStatus] = useState(false)

  return (
    <>
      {!changeStatus && (<>

      <Card sx={styles.card}>
        <CardContent>
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item>
              <Avatar aria-label="recipe" sx={styles.avatar}>
                P
              </Avatar>
            </Grid>
            <Grid item>
              <Typography sx={styles.cardContent.title}>{name}</Typography>
              <Typography sx={styles.cardContent.deadline}>Prazo {deadline}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container alignItems="center" justifyContent={"space-between"}>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item>
                <Button size="small" sx={styles.button} onClick={()=>setOpen(!open)}>Ver detalhes</Button>
              </Grid>
              <Grid item>
                <Chip label={`Distancia ${durationText}`} sx={styles.chip}/>
              </Grid>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
      >
        <Grid container sx={generalStyles.boxGeneral} maxWidth={1000}>
          <Grid item container justifyContent={"center"}>
            <Grid item xs={12} container justifyContent={"center"}>
              <AccountCircleIcon sx={{fontSize: 50}}/>
            </Grid>
            <Grid item xs={12} container justifyContent={"center"}>
              <Typography fontWeight={"500"} sx={{fontSize: 21}}>{name}</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent={"center"}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={statusOrder}
                  onChange={(e)=>{
                    setStatusOrder(e.target.value)
                    setOpen(false)
                    setChangeStatus(true)
                    mutation.mutate({status:e.target.value,id})
                  }}
                  displayEmpty
                >
                  <MenuItem value={status}>
                    {statusOrderTranslate[status]}
                  </MenuItem>
                  {statusOrderModel.map(st => st !== status ? <MenuItem key={st} value={st}>{statusOrderTranslate[st]}</MenuItem> : '')}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ContactsRoundedIcon color="inherit"/>
                <Typography ml={1}>Contato</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Chip label={`Telefone: ${phone}`} />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item  xs={12} sm={12} md={4} lg={4}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HomeRoundedIcon color="inherit"/>
                <Typography ml={1}>Endereço</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Chip label={`Endereço: ${address.addressExtra}`} />
                <Chip label={`Bairro: ${address.neigh}`} />
                <Chip label={`Numero: ${address.num}`} />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item  xs={12} sm={12} md={4} lg={4}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <LunchDiningRoundedIcon color="inherit"/>
                <Typography ml={1}>Lanches</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {burguers && burguers.map(burguer => (
                  <Accordion key={burguer._id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <HomeRoundedIcon color="inherit"/>
                      <Typography>Lanche</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {burguer.options && burguer.options.split(';').map(option=>(
                        <Chip key={option} label={`${option}`} />
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Modal>
      </>)}
    </>
  )
}