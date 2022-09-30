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
          padding: '0 0 10px 0',
        }}>
        {nome}
        </Typography>

        <Typography 
        style={{
          variant: "h1",
          component: "div",
          fontSize: 20,
          textAlign: 'left',
        }}>
        {stack?.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
}