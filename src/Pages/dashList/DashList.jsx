import { Box } from "@mui/material"
import { Cards } from '../../Shared/components/card/Card';


export const DashBoards = () => {
  return (    
    <Box 
    display='flex' 
    flexDirection="row" 
    flexWrap={'wrap'}
    gap={4}
    width={"90%"}
    paddingTop={2}
    justifyContent={'center'}
    >
      <Cards/>
    </Box>
    
  );
}