import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Navbar from './Navbar';
import TodoContainer from './TodoContainer';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
