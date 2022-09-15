import api from '../../services/api/api'
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';


export const Header = () => {

  
  return (
    <Box sx={{display: 'flex', padding: 1, marginTop: 1, position: 'fixed'}}>
      <AiOutlineMenu/>
    </Box>
  );
}