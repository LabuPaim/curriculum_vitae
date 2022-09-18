import { Box, CardMedia, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { layout, backgroundStyle80, backgroundStyle20, principal, imagem, sobre, boxSobre, listIcon, typographyRow, boxSobreText } from "./styled";

export const Sobre = () => {

  const drawerOptions =[
    {
      name: 'github',
      path: 'https://github.com/LabuPaim',
      icons: AiFillGithub,
    },
    {
      name: 'linkedin',
      path: 'https://www.linkedin.com/in/labupaim/',
      icons: AiFillLinkedin,
    },  
    {
      name: 'whatsapp',
      path: 'https://wa.me/5571983006611?text=Oi%20Victor%20tudo%20bem?%0AVi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20batermos%20um%20papo.',
      icons: AiOutlineWhatsApp,
    },
  ]  
    
  return (
    <Box style={layout}>
      <Box style={backgroundStyle80}>
        <Box style={principal}>

          <Box style={boxSobre}>
            <Box style={boxSobreText}>

            <Typography style={sobre}>
              Sobre
            </Typography>
            <Typography style={typographyRow}> 
              Olá me chamo Victor Paim e fiz este projeto para o módulo 4 do curso de <strong>FullStack da BlueEdTech</strong>. Um site de ToDo List consumindo API própria feito com <strong>NestJs, TypeScript,</strong> documentação com <strong>Swagger</strong> e dependências no <strong>MongoDB Atlas</strong>.
              Já no FrontEnd foi utilizado <strong>Axios, ReactJs, Material Ui, Theme Context e Styled Components.</strong>
            </Typography>
            </Box>
          </Box>
          <CardMedia 
          component="img" 
          style={imagem} 
          // src={'../public/fotos/labuPaim-SemFundo.svg'}
          image="./labuPaimSemFundo.png"
          
          />

        </Box>
      </Box>

      <Box style={backgroundStyle20}>
        <List style={listIcon}>
          {
            drawerOptions.map(options =>(
              <ListItemButton href={options.path} key={options.path} target= "_blank">
                <ListItemIcon style={listIcon}>
                  <options.icons />
                </ListItemIcon>                
              </ListItemButton>
            ))
          }
          
        </List>

      </Box>
    </Box>
  );
}
