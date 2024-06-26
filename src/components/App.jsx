import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Subject from '../Pages/Subject';
import NotFound from './NotFound/NotFound';
import Layout from './Layout/Layout';
import SubjectData from './SubjectData/SubjectData';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/subject" element={<Layout><Subject /></Layout>} />
       <Route path="/subject/:subject" element={<Layout><SubjectData /></Layout>}/>
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
