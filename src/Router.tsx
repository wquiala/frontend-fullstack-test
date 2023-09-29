import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { RouterLayout } from './common/RouterLayout';
import { Index } from './pages';
import { CreateEntry } from './Components/CreateEntry';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="/:parent" element={<Index />} />

        <Route path="/:parent/create" element={<CreateEntry />} />
        <Route path="/create" element={<CreateEntry />} />
      </Route>
    </Routes>
  );
};
