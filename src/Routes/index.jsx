
import { DashBoards, ListCandidatos } from '../Pages'
import { Routes, Route} from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashBoards/>} />
            <Route path="/contato" element={<ListCandidatos/>} />
        </Routes>
    )
}
