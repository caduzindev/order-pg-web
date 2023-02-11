import { Container } from "@mui/material"
import { Header } from "../../components/Header"
import { Orders } from "../../components/Orders"

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header/>
      <Orders/>
    </Container>
  )
}