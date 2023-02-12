import { CssBaseline } from "@mui/material";
import { MenuContext } from "./contexts/menu";
import { QueryClientContext } from "./contexts/query";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
    <CssBaseline />
    <MenuContext>
      <QueryClientContext>
        <Home/>
      </QueryClientContext>
    </MenuContext>
    </>
  );
}

export default App;
