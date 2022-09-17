
import { DashList, ListCandidatos, AddCurriculum } from '../Pages'
import { Routes, Route} from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashList/>} />
            <Route path="/create" element={<AddCurriculum/>} />
            <Route path="/contato" element={<ListCandidatos/>} />
        </Routes>
    )
}
