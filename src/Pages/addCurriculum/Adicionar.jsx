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
import { api } from '../../Shared/services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const AddCurriculum = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('md'));
  // const [curriculum, setCurriculum] = useState({});
  const [fotoValue, setFotoValue] = useState('');
  const [nomeValue, setNomeValue] = useState('');
  const [idadeValue, setIdadeValue] = useState('');
  const [stackValue, setStackValue] = useState('');
  const [educacaoValue, setEducacaoValue] = useState('');
  const [profissionalValue, setProfissionalValue] = useState('');
  const [conhecimentoValue, setConhecimentoValue] = useState('');
  const [descricaoValue, setDescricaoValue] = useState('');

  function defullFoto(foto) {
    setFotoValue(foto);
  }
  function defullNome(nome) {
    setNomeValue(nome);
  }
  function defullIdade(idade) {
    setIdadeValue(idade);
  }
  function defullStack(stack) {
    setStackValue(stack);
  }
  function defullEducacao(educacao) {
    setEducacaoValue(educacao);
  }
  function defullProfissional(profissional) {
    setProfissionalValue(profissional);
  }
  function defullConhecimento(conhecimento) {
    setConhecimentoValue(conhecimento);
  }
  function defullDescricao(descricao) {
    setDescricaoValue(descricao);
  }

  const { id } = useParams();

  function handleReset() {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
  }

  async function getById() {
    const curriculo = await api.getById(id);
    // setCurriculum(curriculo);
    setFotoValue(curriculo.foto);
    setNomeValue(curriculo.nome);
    setIdadeValue(curriculo.idade);
    setStackValue(curriculo.stack);
    setEducacaoValue(curriculo.educacao);
    setProfissionalValue(curriculo.profissional);
    setConhecimentoValue(curriculo.conhecimento);
    setDescricaoValue(curriculo.descricao);
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

      if (id) {
        const curriculumUpdate = { ...response, id: id };
        await api.update(curriculumUpdate);
        navigate('/');
      } else {
        await api.createCurriculum(response);
        handleReset();
      }
    } catch (error) {
      console.error('ops! ocorreu um erro' + error);
    }
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <BoxForm>
          <BoxAvatar theme={smDown}>
            <Avatar id={'avatar'} src={fotoValue} theme={smDown} />

            <FormControl fullWidth>
              <TextField
                theme={smDown}
                label="Link da Foto"
                name="foto"
                variant="standard"
                onChange={newValue => defullFoto(newValue.target.value)}
                value={fotoValue}
                required
              />
            </FormControl>
          </BoxAvatar>

          <BoxColumn theme={smDown}>
            <FormControl className={'formControlRow'} theme={smDown}>
              <TextField
                className={'controlRow'}
                label="Nome"
                onChange={newValue => defullNome(newValue.target.value)}
                value={nomeValue}
                name="name"
                variant="standard"
                required
              />
              <TextField
                className={'controlRow'}
                label="Idade"
                name="idade"
                variant="standard"
                onChange={newValue => defullIdade(newValue.target.value)}
                value={idadeValue}
                required
              />
            </FormControl>

            <FormControl fullWidth style={formControlColumn}>
              <TextField
                label="Stack"
                name="stack"
                variant="standard"
                required
                onChange={newValue => defullStack(newValue.target.value)}
                value={stackValue}
              />
              <TextField
                label="Formação"
                name="ensino"
                variant="standard"
                required
                onChange={newValue => defullEducacao(newValue.target.value)}
                value={educacaoValue}
              />
              <TextField
                label="Experiência profissional"
                name="profissional"
                variant="standard"
                required
                onChange={newValue => defullProfissional(newValue.target.value)}
                value={profissionalValue}
              />
              <TextField
                label="Área de conhecimento"
                name="conhecimento"
                variant="standard"
                required
                onChange={newValue => defullConhecimento(newValue.target.value)}
                value={conhecimentoValue}
              />
              <TextField
                label="Descrição"
                name="descricao"
                multiline
                variant="outlined"
                onChange={newValue => defullDescricao(newValue.target.value)}
                value={descricaoValue}
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
