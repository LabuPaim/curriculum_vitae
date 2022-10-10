import { Environment } from '../environment';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = Environment.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function handleError(text, description) {
  swal({
    title: text,
    text: description,
    icon: 'warning',
    timer: 5000,
  });
}

export const api = {
  getAll: async () => {
    try {
      const all = await axios.get();
      return all.data;
    } catch (err) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },

  createCurriculum: async curriculum => {
    try {
      const newCurriculum = await axios.post('/', curriculum);
      return newCurriculum.data;
    } catch (err) {
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },

  deleteCurriculum: async id => {
    try {
      const isDeleted = await axios.delete('/' + id);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err) {
      handleError(
        'Erro ao deletar produto',
        'Ocorreu um erro ao deletar o produto, por favor tente novamente mais tarde!',
      );
    }
  },

  getById: async id => {
    try {
      const curriculum = await axios.get('/' + id);
      return curriculum.data;
    } catch (err) {
      handleError(
        'Produto não encontrado',
        'Nenhum produto com esse id foi encontrado no servidor',
      );
    }
  },

  update: async curriculum => {
    try {
      const updatedCurriculum = await axios.patch(
        '/' + curriculum._id,
        curriculum,
      );
      return updatedCurriculum.data;
    } catch (err) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
};
