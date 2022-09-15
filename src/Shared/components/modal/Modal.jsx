import { Box, Typography } from "@mui/material"
import Modal from '@mui/material/Modal';
// import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  width: 400,
  maxWidth: 350,
  border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};


export const IsModal = ({open, onRequestClose, props}) => {

  return (
    <Modal
      open={open}
      onRequestClose={onRequestClose}
      sx={style}
    >
      <Box>
        <Typography variant="h6" component="h2">
          {props.nome}
        </Typography>
        <Typography sx={{ mt: 2 }}>
        {props.nome}
        </Typography>
      </Box>
    </Modal>
  );
}