import {
  Avatar,
  Button,
  FormControl,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  formControlColumn,
  Layout,
  BoxColumn,
  Form,
  BoxForm,
  BoxButtom,
  BoxAvatar,
} from './styled';
import api from '../../Shared/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const AddCurriculum = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('md'));
  const [userImage, setUserImage] = useState('');

  const { id } = useParams();
  console.log(id);

  function handleReset() {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const formList = e.target;
      const formStack = formList[3].value;
      const formConhecimento = formList[6].value;

      const response = {
        foto: formList[0].value,
        nome: formList[1].value,
        idade: formList[2].value,
        stack: [formStack],
        educacao: formList[4].value,
        profissional: formList[5].value,
        conhecimento: [formConhecimento],
        descricao: formList[7].value,
      };

      setTimeout(() => {
        api
          .post('/', response)
          .then(() => {
            console.log('Criado com Sucesso');
          })
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, 1500);

      handleReset();
    } catch (error) {
      console.error('ops! ocorreu um erro' + error);
    }
  };

  useEffect(() => {
    // getProductById();
  }, []);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <BoxForm>
          <BoxAvatar theme={smDown}>
            <Avatar id={'avatar'} src={userImage} theme={smDown} />
            <FormControl fullWidth>
              <TextField
                theme={smDown}
                label="Link da Foto"
                name="foto"
                variant="standard"
                onChange={event => {
                  setUserImage(event.target.value);
                }}
                required
              />
            </FormControl>
          </BoxAvatar>

          <BoxColumn theme={smDown}>
            <FormControl className={'formControlRow'} theme={smDown}>
              <TextField
                className={'controlRow'}
                label="Nome"
                name="name"
                variant="standard"
                required
              />
              <TextField
                className={'controlRow'}
                label="Idade"
                name="idade"
                variant="standard"
                required
              />
            </FormControl>

            <FormControl fullWidth style={formControlColumn}>
              <TextField
                label="Stack"
                name="stack"
                variant="standard"
                required
              />
              <TextField
                label="Formação"
                name="ensino"
                variant="standard"
                required
              />
              <TextField
                label="Experiência profissional"
                name="profissional"
                variant="standard"
                required
              />
              <TextField
                label="Área de conhecimento"
                name="conhecimento"
                variant="standard"
                required
              />
              <TextField
                label="Descrição"
                name="descricao"
                multiline
                variant="outlined"
              />
            </FormControl>
          </BoxColumn>
        </BoxForm>

        <BoxButtom theme={smDown}>
          <Button id={'submit'} type="submit" theme={smDown}>
            Submit
          </Button>
          <Button id={'reset'} type="reset" theme={smDown}>
            Limpar
          </Button>
        </BoxButtom>
      </Form>
    </Layout>
  );
};
