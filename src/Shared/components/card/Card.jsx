import api from '../../services/api/api'
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
// import IconButton from '@mui/material/IconButton';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


export const Cards = () => {

  const [stateCandidato, setStateCandidato] = useState([]);
  // const [expanded, setExpanded] = useState(false);
  // const [isFavorite, setIsFavorite] = useState('secondary');
  // const [isShare, setIsShare] = useState('secondary');

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const isFavoriteClick = () => {
  //   isFavorite === 'secondary' ?
  //   setIsFavorite('favorite'):
  //   setIsFavorite('secondary')    
  // };

  // const isShareClick = () => {
  //   isShare === 'secondary' ?
  //   setIsShare('share'):
  //   setIsShare('secondary')    
  // };
  
  useEffect(() => {
    api
    .get("/candidato")
    .then((response) => {
      setStateCandidato(response.data)   
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  },[])
  

  return (
    <>
    {stateCandidato.map(item =>{
      return (
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
          component="img"
          height={'auto'}
          image={item?.foto}
          alt={`Foto de ${item?.nome}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" fontSize={22}>
            {item?.nome}
            </Typography>

            <Typography gutterBottom variant="h1" component="div" fontSize={18}>
            {
              item?.stack.length === 1 ? item.stack:
              item?.stack.length === 2 ? `${item.stack[0]}, ${item.stack[1]}` :
              item?.stack.length === 3 ? `${item.stack[0]}, ${item.stack[1]}, ${item.stack[2]}` :
              item?.stack.length === 4 ? `${item.stack[0]}, ${item.stack[1]}, ${item.stack[2]}, ${item.stack[3]}` :
              <></>
            }
            </Typography>
            
            <Typography gutterBottom variant="h2" component="div" fontSize={16}>
            {
              item?.conhecimento.length === 1 ? item.conhecimento:
              item?.conhecimento.length === 2 ? `${item.conhecimento[0]}, ${item.conhecimento[1]}` :
              item?.conhecimento.length === 3 ? `${item.conhecimento[0]}, ${item.conhecimento[1]}, ${item.conhecimento[2]}` :
              item?.conhecimento.length === 4 ? `${item.conhecimento[0]}, ${item.conhecimento[1]}, ${item.conhecimento[2]}, ${item.conhecimento[3]}` :
              <></>
            }
            </Typography>

            <Typography gutterBottom variant="h3" component="div" fontSize={20}>
            {item?.educacao}
            </Typography>

            <Typography gutterBottom variant="h3" component="div" fontSize={20}>
            {item?.profissional}
            </Typography>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>

              <Typography
              sx={{
                variant: 'h3',
                component: 'div',
                fontWeight: 'bold',
                fontSize: 13
              }}>
                Descrição:
              </Typography>
              <Typography sx={{variant: 'h3', component: 'div', fontSize: 11}}>
                {item?.descricao}
              </Typography>

            </Box>


            {/* <CardActions disableSpacing>
              <IconButton 
              aria-label="add to favorites"
              onClick={isFavoriteClick}
              color={isFavorite}
              >
                <FavoriteIcon/>
              </IconButton>
              <IconButton 
              aria-label="share"
              onClick={isShareClick}
              color={isShare}
              >
                <ShareIcon/>
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions> */}

            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse> */}
          </CardContent>          
        </Card>
      )
    })}
    </>
    
    
  );
}