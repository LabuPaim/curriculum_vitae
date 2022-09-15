import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system"
import { useDrawerContext } from "shared/contexts";


export const LayoutBase = ({children, titulo, barraFerramentas}) => {

    const theme = useTheme();
    const {toggleDrawerOpen} = useDrawerContext();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box display="flex" height="100%" flexDirection="column" gap={1}>  
            <Box display="flex" padding={1} alignItems="center" height={theme.spacing(smDown? 6 : mdDown? 8: 12)} gap={1}>

                {smDown &&
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>}
                
                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
                    {titulo}
                </Typography>
            </Box>

            {barraFerramentas &&
                <Box>
                    {barraFerramentas}
                </Box>
            }
            <Box flex={1} overflow='auto'>
                {children}
            </Box>  
            
        </Box>


    )

}