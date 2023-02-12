import { CssBaseline } from "@mui/material";
import { MenuContext } from "./contexts/menu";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
    <CssBaseline />
    <MenuContext>
      <Home/>
    </MenuContext>
    </>
  );
}

export default App;
