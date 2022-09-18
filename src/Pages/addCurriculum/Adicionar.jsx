import { Avatar, Box, Button, FormControl, TextField } from "@mui/material";
import { layout, avatar, boxRow, boxColumn, formControlRow, formControlColumn } from "./styled";
import api from "../../Shared/services/api/api";

export const AddCurriculum = () => {
  
  const handleSubmit = async (e) =>{

    try {
      e.preventDefault()

      const formList = e.target
      const formStack =  formList[3].value
      const formConhecimento =  formList[6].value

      const response = {
        foto: formList[0].value,
        nome: formList[1].value,
        idade: formList[2].value,
        stack: [formStack],
        educacao: formList[4].value,
        profissional: formList[5].value,
        conhecimento: [formConhecimento],
        descricao: formList[7].value,
      }

      setTimeout(()=>{
      console.log('response ',response)
      api
      .post("/candidato", response)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

      },1500)

    } catch (error) {
      console.error("ops! ocorreu um erro" + error)      
    }    
  }
  
  return (
    <Box style={layout}>

      <form onSubmit={handleSubmit}>
      <Box style={boxRow}>

        <Avatar style={avatar} src={'https://avatars.githubusercontent.com/u/91322495?v=4'} />
        <FormControl fullWidth >
          <TextField label="Link da Foto" name="foto" variant="standard" required />
        </FormControl>

      </Box>

      <Box style={boxColumn}>

        <FormControl style={formControlRow}  >
          <TextField style = {{width: '50%'}} label="Nome" name="name" variant="standard" required />
          <TextField style = {{width: '50%'}} label="Idade" name="idade" variant="standard" required />
        </FormControl>

        <FormControl fullWidth style={formControlColumn} >
          <TextField label="Stack" name="stack" variant="standard" required />
          <TextField label="Ensino" name="ensino" variant="standard" required />
          <TextField label="Profissional" name="profissional" variant="standard" required />
          <TextField label="Conhecimento" name="conhecimento" variant="standard" required />
          <TextField label="Descrição" name="descricao" multiline variant="outlined" />
        </FormControl>

      </Box>

      <Box style={boxRow}>
        <Button type="submit">
          Submit
        </Button>
        <Button type="reset" >
          Limpar
        </Button>
      </Box>
      </form>

    </Box>
  );
}