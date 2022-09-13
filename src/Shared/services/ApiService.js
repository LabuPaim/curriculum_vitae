import { Api } from "./api/api";

const getAllCandidatos= () => Api.get('/candidato')
const getByIdCandidatos= () => Api.get('/candidato/:id')

export const apiService = {
    getAllCandidatos: getAllCandidatos,
    getByIdCandidatos: getByIdCandidatos,
}