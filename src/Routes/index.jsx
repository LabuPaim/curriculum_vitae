import { DashList, AddCurriculum, Sobre, ID } from '../Pages';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashList />} />
      <Route path="/create" element={<AddCurriculum />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/:id" element={<ID />} />
    </Routes>
  );
};
