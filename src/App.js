
import { BrowserRouter, Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import './styles/index.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Academy from './pages/Academy';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Course from './pages/Course';
import Resource from './pages/Resource';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route exact path="" element={<Home/>}></Route>
       <Route path="academy" element={<Academy/>}></Route>
       <Route path="contact" element={<Contact/>}></Route>
       <Route path="about"element={<About/>}></Route>
       <Route path="course" element={<Course/>}></Route>
       <Route path="resource" element={<Resource/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
