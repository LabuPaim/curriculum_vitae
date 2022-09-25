import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../Routes';
import { MenuLateral } from '../Shared/components/menuLateral/MenuLateral';
import { AppThemeProvider } from '../Shared/contexts';

const App = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <MenuLateral>
          <CssBaseline />
          <AppRoutes />
        </MenuLateral>
      </AppThemeProvider>
    </BrowserRouter>
  );
};

export default App;
