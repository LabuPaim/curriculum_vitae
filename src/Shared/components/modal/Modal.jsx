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
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const IsModal = ({ open, requestClose, props, updatePage }) => {
  const navigate = useNavigate();

  async function handleDelete(propsID) {
    swal({
      title: 'Deletar Produto?',
      text: 'Tem certeza que deseja deletar este produto?',
      icon: 'warning',
      dangerMode: true,
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: null,
          visible: true,
          closeModal: true,
          className: '',
        },
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async res => {
      if (res) {
        await api.deleteCurriculum(propsID);
      }
    });
  }

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
            href={'/' + props._id}
            onClick={() => {
              requestClose();
              navigate('/update/' + props._id);
            }}
          >
            Editar
          </Buttom>
          <Buttom
            key="delete"
            id="delete"
            onClick={() => {
              handleDelete(props._id);
              updatePage();
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
