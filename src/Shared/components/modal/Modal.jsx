import { Box, Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { modal, layoutBox, topX, informacaoBox, Layout } from './styled';
import { VscChromeClose } from 'react-icons/vsc';
import api from '../../services/api';

export const IsModal = ({ open, requestClose, props }) => {
  const handleDelete = id => {
    api.delete(`${id}`);
  };

  return (
    <Modal 
    open={open} 
    style={modal}
    onClick={() => {
      requestClose();
    }}
    >
      <Layout style={layoutBox}>
        <Box style={topX}>
          <VscChromeClose
            onClick={requestClose}
            style={{ cursor: 'pointer' }}
          />
        </Box>

        <Box style={informacaoBox}>
          <Typography variant="h5" component="h2">
            {props.nome} {props.idade} anos
          </Typography>

          <Typography>
            {props.stack === undefined ||
            props.stack === null ||
            props.stack.length === 0 ? (
              <></>
            ) : props.stack.length === 1 ? (
              props.stack
            ) : props.stack.length === 2 ? (
              `${props.stack[0]}, ${props.stack[1]}`
            ) : props.stack.length === 3 ? (
              `${props.stack[0]}, ${props.stack[1]}, ${props.stack[2]}`
            ) : props.stack.length === 4 ? (
              `${props.stack[0]}, ${props.stack[1]}, ${props.stack[2]}, ${props.stack[3]}`
            ) : (
              <></>
            )}
          </Typography>

          <Typography>{props.educacao}</Typography>
          <Typography>{props.profissional}</Typography>
          <Typography>{props.conhecimento}</Typography>
          <Typography>{props.descricao}</Typography>
        </Box>
        <Box>
          <Button
          // onClick={() => {
          //   handleDelete(props._id);
          //   requestClose();
          // }}
          >
            Edite
          </Button>
          <Button
            onClick={() => {
              handleDelete(props._id);
            }}
          >
            Delete
          </Button>
        </Box>
      </Layout>
    </Modal>
  );
};
