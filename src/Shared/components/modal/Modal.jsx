import { Box, Typography } from "@mui/material"
import Modal from '@mui/material/Modal';
import { layout, layoutBox, topX } from "./styled";
import { VscChromeClose } from "react-icons/vsc";


export const IsModal = ({open, onRequestClose, props}) => {

  return (
    <Modal
      open={open}
      onRequestClose={onRequestClose}
      style={layout}      
    >
      <Box style={layoutBox}>

        <Box style={topX}>
          <VscChromeClose onClick={onRequestClose} style={{cursor: "pointer"}}/>
        </Box>

        <Typography variant="h6" component="h2">
          {props.nome} {props.idade} anos
        </Typography>

        <Typography >
        {props.stack}
        </Typography>
        <Typography >
        {props.educacao}
        </Typography>
        <Typography >
        {props.profissional}
        </Typography>
        <Typography >
        {props.conhecimento}
        </Typography>
        <Typography >
        {props.descricao}
        </Typography>        

      </Box>
    </Modal>
  );
}