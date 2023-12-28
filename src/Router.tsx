import { Route, Routes } from 'react-router-dom';
import { RouterLayout } from './common/RouterLayout';
import { Index, Login } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="/:parent" element={<Index />} />
      </Route>
    </Routes>
  );
};
