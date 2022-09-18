import { Card, CardContent, CardMedia, Typography } from "@mui/material"


export const Cards = ({ foto, nome, stack }) => {
  return (
    
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
      component="img"
      height={'auto'} 
      image={foto}
      alt={`Foto de ${nome}`}
      />
      <CardContent
      style={{
        display: "flex",
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 1,
      }}>
        <Typography
        style={{
          variant: "h3",
          component: "div",
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {nome}
        </Typography>

        <Typography 
        style={{
          variant: "h1",
          component: "div",
          fontSize: 20,
        }}>
        {
          stack.length === 1 ? stack: 
          stack.length === 2 ? `${stack[0]}, ${stack[1]}` :
          stack.length === 3 ? `${stack[0]}, ${stack[1]}, ${stack[2]}` :
          stack.length === 4 ? `${stack[0]}, ${stack[1]}, ${stack[2]}, ${stack[3]}` :
          <></>
        }
        </Typography>
      </CardContent>
    </Card>
  );
}