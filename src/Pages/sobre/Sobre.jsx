import {
  CardMedia,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  Layout,
  listIcon,
  Background80,
  Background20,
  CardPrincipal,
  BoxSobre,
} from './styled';

export const Sobre = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('lg'));
  const drawerOptions = [
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
  ];

  return (
    <Layout theme={smDown}>
      <Background80 theme={smDown}>
        <CardPrincipal theme={smDown}>
          <BoxSobre theme={smDown}>
            <Typography variant={'h1'} theme={smDown}>Sobre</Typography>
            <Typography className={'sobre'} theme={smDown}>
              Olá me chamo Victor Paim e fiz este projeto para o módulo 4 do
              curso de <strong>FullStack da BlueEdTech</strong>. Um site de ToDo
              List consumindo API própria feito com{' '}
              <strong>NestJs, TypeScript,</strong> documentação com{' '}
              <strong>Swagger</strong> e dependências no{' '}
              <strong>MongoDB Atlas</strong>. Já no FrontEnd foi utilizado{' '}
              <strong>
                Axios, ReactJs, Material Ui, Theme Context e CSS in JS.
              </strong>
            </Typography>
          </BoxSobre>
          <CardMedia
            component="img"
            className={'imagemLabu'}
            image="./labuPaimSemFundo.png"
          />
        </CardPrincipal>
      </Background80>

      <Background20 theme={smDown}>
        <List style={listIcon}>
          {drawerOptions.map(options => (
            <ListItemButton
              href={options.path}
              key={options.path}
              target="_blank"
            >
              <ListItemIcon style={listIcon}>
                <options.icons />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Background20>
    </Layout>
  );
};
