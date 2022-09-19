import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import { Cards } from '../../Shared/components/card/Card';
import { IsModal } from "../../Shared/components/modal/Modal";
import api from "../../Shared/services/api/api";


export const DashList = () => {

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  const [stateCandidato, setStateCandidato] = useState([]);
  const [uniqueCandidato, setUniqueCandidato] = useState({});

  useEffect(() => {
    api
    .get("/candidato")
    .then((response) => {
      setStateCandidato(response.data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  },[]) 

  return (
    <>
    <Box 
    display='flex' 
    flexDirection="row-reverse" 
    flexWrap={'wrap'}
    gap={4}
    width={"90%"}
    minHeight={880}
    padding={2}
    justifyContent={'center'}
    alignItems={'flex-start'}
    onClick={()=>{isOpen && setOpen(false)}}
    >
      {stateCandidato.map(item =>{
        return (
          <Button onClick={()=>{
            setUniqueCandidato(item);
            handleOpen()
          }}>
            <Cards
            foto={item.foto}
            nome={item.nome}
            stack={item.stack}
            />
          </Button>
        )      
      })}
    </Box>
    <IsModal
    open={isOpen}
    onRequestClose={handleOpen}
    props={uniqueCandidato}
    />
    </>
  );
}