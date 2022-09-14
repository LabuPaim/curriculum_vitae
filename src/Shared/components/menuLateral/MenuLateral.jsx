import { Drawer, List, useTheme, useMediaQuery, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AiFillHome, AiFillContacts } from "react-icons/ai"
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Box } from "@mui/system";
import { useState } from "react";
import { useAppThemeContext } from "../../contexts";
// import { ListItemLink } from "./List";



export const MenuLateral = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen =() => {
    setDrawerOpen(true)
  }

  const {toggleTheme, themeName } = useAppThemeContext()

  const drawerOptions =[
    {
      path: '/',
      icons: AiFillHome,
      label: 'Página Inicial',
    },
    {
      path: '/contato',
      icons: AiFillContacts,
      label: 'Contato',
    },
  ]
  

  return (
    <Box>
      <Drawer
      anchor="left"
      open={drawerOpen} 
      variant={smDown ?'temporary' : 'permanent'} 
      onClose={toggleDrawerOpen}
      >
        <Box width={theme.spacing(28)} display='flex' height='100%' flexDirection='column'>
          
          <Box flex={1}>
            <List component='nav'>
              {
                drawerOptions.map(options =>(
                  <ListItemButton href={options.path} key={options.path}>
                    <ListItemIcon>
                      <options.icons/>
                    </ListItemIcon>
                    <ListItemText primary={options.label} />
                  </ListItemButton>
                  

              ))}
              
            </List>
          </Box>

          <Box>
            <List component='nav'>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'light' ?
                  <MdLightMode/>:
                  <MdNightlight/>}
                  
                </ListItemIcon>
                <ListItemText primary='Alternar tema' />                  
              </ListItemButton>  
            </List>

          </Box>
          
        </Box>
      </Drawer>
      <Box marginLeft={smDown ? theme.spacing(2) : theme.spacing(28)}>
      {children}

      </Box>


    </Box>
  );
}