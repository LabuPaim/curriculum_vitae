
import { Box } from "@mui/material"
import { AiOutlineMenu } from 'react-icons/ai';


export const Header = () => {
  return (
    <Box sx={{display: 'flex', padding: 1, marginTop: 1, position: 'fixed'}}>
      <AiOutlineMenu/>
    </Box>
  );
}