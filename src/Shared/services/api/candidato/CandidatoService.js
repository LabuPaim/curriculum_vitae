import { Api } from "../api";


const getAll = async () => {   
    try {
        const  {data}  = await Api.get('/candidato')        
        return data
        
    } catch (error) {
        return error
    }
};


const getById = async (id) => {
    try {
        const { data } = await Api.get(`/candidato/${id}`)
        console.log('Estou aqui', data.data)
        
    } catch (errorIntercptor) {
    }

};

export const DddService ={
    getAll,
    getById

}