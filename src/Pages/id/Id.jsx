import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';
import api from '../../Shared/services/api';

export const ID = () => {
  // const [isOpen, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!isOpen);

  // const [stateCandidato, setStateCandidato] = useState([]);
  const [uniqueCandidato, setUniqueCandidato] = useState({});

  api
    .get(window.location.pathname)
    .then(response => {
      setUniqueCandidato(response.data);
    })
    .catch(err => {
      console.error('ops! ocorreu um erro' + err);
    });

  return (
    <>
      <Box
        display="flex"
        flexDirection="row-reverse"
        flexWrap={'wrap'}
        gap={4}
        maxWidth={'50%'}
        minHeight={880}
        padding={2}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <CardMedia
          component="img"
          height={'auto'}
          image={uniqueCandidato.foto}
          alt={`Foto de ${uniqueCandidato.nome}`}
        />
        <CardContent
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            style={{
              variant: 'h3',
              component: 'div',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            {uniqueCandidato.nome}
          </Typography>

          <Typography
            style={{
              variant: 'h1',
              component: 'div',
              fontSize: 20,
            }}
          >
            {/* {uniqueCandidato.stack.length === 0 ? (
              <></>
            ) : uniqueCandidato.stack.length === 1 ? (
              uniqueCandidato.stack
            ) : uniqueCandidato.stack.length === 2 ? (
              `${uniqueCandidato.stack[0]}, ${uniqueCandidato.stack[1]}`
            ) : uniqueCandidato.stack.length === 3 ? (
              `${uniqueCandidato.stack[0]}, ${uniqueCandidato.stack[1]}, ${uniqueCandidato.stack[2]}`
            ) : uniqueCandidato.stack.length === 4 ? (
              `${uniqueCandidato.stack[0]}, ${uniqueCandidato.stack[1]}, ${uniqueCandidato.stack[2]}, ${uniqueCandidato.stack[3]}`
            ) : (
              <></>
            )} */}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};
