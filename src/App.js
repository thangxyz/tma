
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Course from './Component/Course';
import Contact from './Component/Contact';
import Price from './Component/Price';
import Teacher from './Component/Teacher';
import {
  Routes, Route,
} from "react-router-dom";
function App() {
  return (
    <div>
    <Header/>
  {/* <Course/> */}
    {/* <Home/> */}

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/contact" element={<Contact/>}/>  
      </Routes>

    <Footer/>
    </div>
  );
}

export default App;
