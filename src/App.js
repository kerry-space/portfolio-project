import './App.scss';
import {Routes, Route, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

import Home from "./ containers/home/Home";
import Contact from "./ containers/contact/Contact";
import About from "./ containers/about/About";
import Portfolio from "./ containers/portfolio/Portfolio";

import Skills from './ containers/skills/Skills';
import NavbarMenu from './components/navBar/NavbarMenu';
import particlesConfig from './helpers/particlesConfig';
import Theme from './ containers/theme/Theme';
import TodoItem from './ containers/portfolio/allProject/todoList/TodoItem';
import Test from './Test';
import ContentLayout from './ containers/portfolio/allProject/themepage/ContentLayout';
import {ThemeProvider} from "./ containers/portfolio/allProject/themepage/ThemeProvider";



function App() {

  const particlesInit = async (main) =>{
    await loadFull(main);
  }

  const location = useLocation();
  const renderparticlesConfigCurrentPageHome = location.pathname ==="/";

  return (
    //ThemeProvider which provide us with all param passet and can be accessible 
   <ThemeProvider>

   
    <div className="App">
      {/*particles js */}
      {
         renderparticlesConfigCurrentPageHome && <Particles id='particles' options={particlesConfig} init={particlesInit} /> 
      }
     
      {/*navbar component*/}
        <div className='App__navbar-wrapper'>
        <NavbarMenu />
        </div>
      {/*main page content */}
      <div className='App__main-content-wrapper'>
        <Theme />
        <Routes>
          {/*create all routes*/}
          <Route path='/portfolio-project' element={<Home/>} />
          <Route path='/about/portfolio-project' element={<About/>} />
          <Route path='/skill/portfolio-project' element={<Skills/>} />
          <Route path='/portfolio/portfolio-project' element={<Portfolio/>} /> 
          <Route path='/contact/portfolio-project' element={<Contact/>} /> 
          
          <Route path="/todolist/portfolio-project" element={<TodoItem/>} />
          <Route path="/test/portfolio-project" element={<Test/>} />
          <Route path="/theme/portfolio-project" element={<ContentLayout/>} />
    
        </Routes>
      </div>

    </div>
    </ThemeProvider> 
  );
}

export default App;
