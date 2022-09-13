import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../Routes";
import { MenuLateral } from "../Shared/components/menuLateral/MenuLateral";
import { AppThemeProvider } from "../Shared/contexts";



const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>

        <AppRoutes/>
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App