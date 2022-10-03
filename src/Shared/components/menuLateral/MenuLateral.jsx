import {
  Drawer,
  List,
  useTheme,
  useMediaQuery,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
  AiOutlineHome,
} from 'react-icons/ai';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useAppThemeContext } from '../../contexts';
import { Header } from '../header/Header';

export const MenuLateral = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { toggleTheme, themeName } = useAppThemeContext();

  const drawerOptions = [
    {
      path: '/',
      icons: AiOutlineHome,
      label: 'Página Inicial',
    },
    {
      path: '/create',
      icons: AiOutlineUserAdd,
      label: 'Adicionar',
    },
    {
      path: '/sobre',
      icons: AiOutlineInfoCircle,
      label: 'Sobre',
    },
  ];

  return (
    <Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          display="flex"
          height="100%"
          flexDirection="column"
        >
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(options => (
                <ListItemButton href={options.path} key={options.path}>
                  <ListItemIcon sx={{ fontSize: 25 }}>
                    <options.icons />
                  </ListItemIcon>
                  <ListItemText primary={options.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon sx={{ fontSize: 25 }}>
                  {themeName === 'light' ? <MdLightMode /> : <MdNightlight />}
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      {smDown && (
        <Box onClick={smDown && toggleDrawerOpen}>
          <Header />
        </Box>
      )}
      <Box marginLeft={smDown ? theme.spacing(4) : theme.spacing(28)}>
        {children}
      </Box>
    </Box>
  );
};
