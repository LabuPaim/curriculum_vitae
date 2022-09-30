import { Avatar, Button, FormControl, TextField } from '@mui/material';
import {
  layout,
  avatar,
  boxRow,
  boxColumn,
  formControlRow,
  formControlColumn,
  Layout,
  Box,
  BoxColumn,
  Form,
} from './styled';
import api from '../../Shared/services/api';
import { useState } from 'react';

export const AddCurriculum = () => {
  const [userImage, setUserImage] = useState('');

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

  return (
    <Layout >
      <Form onSubmit={handleSubmit}>
        <Box>
          <Avatar style={avatar} src={userImage} />
          <FormControl fullWidth>
            <TextField
              label="Link da Foto"
              name="foto"
              variant="standard"
              onChange={event => {
                setUserImage(event.target.value);
              }}
              required
            />
          </FormControl>
        </Box>

        <BoxColumn>
          <FormControl style={formControlRow}>
            <TextField
              style={{ width: '50%' }}
              label="Nome"
              name="name"
              variant="standard"
              required
            />
            <TextField
              style={{ width: '50%' }}
              label="Idade"
              name="idade"
              variant="standard"
              required
            />
          </FormControl>

          <FormControl fullWidth style={formControlColumn}>
            <TextField label="Stack" name="stack" variant="standard" required />
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

        <Box>
          <Button id={"submit"} type="submit" reset>
            Submit
          </Button>
          <Button id={"reset"} type="reset">Limpar</Button>
        </Box>
      </Form>
    </Layout>
  );
};
