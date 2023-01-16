import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import AboutApp from '../pages/AboutApp';
import AboutAuthor from '../pages/AboutAuthor';
import NoMatch from '../pages/NoMatch';
import Navbar from './Navbar';
import TodoContainer from './TodoContainer';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path="about-app" element={<AboutApp />} slug="about-app" />
          <Route path="about-author" element={<AboutAuthor />} slug="about-app" />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
