import { Box, CardMedia, Typography } from "@mui/material";
import { layout, backgroundStyle80, backgroundStyle20, principal, imagem, sobre, boxContato } from "./styled";

export const Sobre = () => {

  const drawerOptions =[
    {
      path: '/',
      icons: AiFillHome,
    },
    {
      path: '/create',
      icons: AiOutlineUserAdd,
    },  
    {
      path: '/sobre',
      icons: AiFillContacts,
    },
  ]  
    
  return (
    <Box style={layout}>
      <Box style={backgroundStyle80}>
        <Box style={principal}>

          <Box style={boxContato}>
            <Typography style={sobre}>
              Sobre
            </Typography>
            <Typography style={{textAlign:"justify"}}> 
              Olá me chamo Victor Paim e fiz este projeto para o módulo 4 do curso de <strong>FullStack da BlueEdTech</strong>. Um site de ToDo List consumindo API própria feito com <strong>NestJs, TypeScript,</strong> documentação com <strong>Swagger</strong> e dependências no <strong>MongoDB Atlas</strong>.
              Já no FrontEnd foi utilizado <strong>Axios, ReactJs, Material Ui, Theme Context e Styled Components.</strong>
            </Typography>
          </Box>
          <CardMedia component="img" style={imagem} image={'https://avatars.githubusercontent.com/u/91322495?v=4'}/>

        </Box>
      </Box>

      <Box style={backgroundStyle20}>

      </Box>
    </Box>
  );
}
