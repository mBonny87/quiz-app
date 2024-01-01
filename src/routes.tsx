import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/templates/home';
import { QuizTemplate } from './components/templates/quiz/quiz';
// import { useLocalDb } from './useLocalDb';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path=":id" element={<QuizTemplate></QuizTemplate>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
