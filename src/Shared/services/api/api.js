
import { Environment } from "../../environment";
import axios from "axios";

const api = axios.create({
  baseURL: Environment.BASE_URL,
});

// function getAll (res)  {
//   api
//   .get('/candidato')
//   .then(response => {
//     const data = response.data
//     console.log(data);
//     const listaCandidato = data.map(item => {
//       return{
//         id: item._id,
//         nome: item.nome,
//         idade: item.idade,
//         stack: item.stack,
//         educacao: item.educacao,
//         profissional: item.profissional,
//         conhecimento: item.conhecimento,
//         descricao: item.descricao,
//         foto: item.foto,
//       }
//     })
//     return listaCandidato
//   }).catch(error => console.log(error))
// }
      
      

// function getId() {
//     axios.get(Environment.BASE_URL+'/candidato'+'/:id')
//       .then(response => {
//         const data = response.data
  
//         userAvatar.src = data.avatar
//         userNome.textContent = data.name
//         userId.textContent = data.id
//         userCity.textContent = data.city
//       })
//       .catch(error => console.log(error))
// }
  
//   function addNewUser(newUser) {
  
//     axios.post(url, newUser)
//       .then(response => {
//         alert(JSON.stringify(response.data))
//         getUsers()
//       })
//       .catch(error => console.error(error));
//   }
  
//   function updateUser(user, id) {
//     axios.put(`${url}/${id}`, user)
//       .then(response => {
//         alert(JSON.stringify(response.data))
//         getUsers()
//       })
//       .catch(error => console.error(error));
//   }
  
//   function deleteUser(id) {
//     axios.delete(`${url}/${id}`)
//       .then(response => {
//         alert(JSON.stringify(response.data))
//         getUsers()
//       })
//       .catch(error => console.error(error));
//   }



export default api