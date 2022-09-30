import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import {
  modal,
  Layout,
  BoxButtom,
  Buttom,
  TopX,
  BoxInfo,
  Box,
  BoxImage,
} from './styled';
import { VscChromeClose } from 'react-icons/vsc';
import api from '../../services/api';

export const IsModal = ({ open, requestClose, props }) => {
  const handleDelete = id => {
    api.delete(`${id}`);
  };

  const isStack = props.stack;

  return (
    <Modal open={open} style={modal} onClose={requestClose}>
      <Layout>
        <TopX>
          <strong>
            <VscChromeClose
              onClick={requestClose}
              style={{ cursor: 'pointer' }}
            />
          </strong>
        </TopX>
        <Box>
          <BoxImage src={props.foto} />
          <BoxInfo>
            <Typography variant="h5" component="h2">
              {props.nome}, {props.idade} anos
            </Typography>
            <Typography component="h3">{isStack?.join(', ')}</Typography>
            <div>
              <Typography>
                <strong>Formação:</strong>
              </Typography>
              <Typography>{props.educacao}</Typography>
            </div>
            <div>
              <Typography>
                <strong>Experiência profissional:</strong>
              </Typography>
              <Typography>{props.profissional}</Typography>
            </div>
            <div>
              <Typography>
                <strong>Área de conhecimento:</strong>
              </Typography>
              <Typography>{props.conhecimento?.join(', ')}</Typography>
            </div>
            <div>
              <Typography>
                <strong>Descrição:</strong>
              </Typography>
              <Typography>{props.descricao}</Typography>
            </div>
          </BoxInfo>
        </Box>

        <BoxButtom>
          <Buttom
            key="edite"
            id="edite"
            // href={'/' + props._id}
            onClick={() => {
              requestClose();
            }}
          >
            Editar
          </Buttom>
          <Buttom
            key="delete"
            id="delete"
            onClick={() => {
              handleDelete(props._id);
              requestClose();
            }}
          >
            Deletar
          </Buttom>
        </BoxButtom>
      </Layout>
    </Modal>
  );
};
