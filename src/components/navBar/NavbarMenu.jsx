import React,{useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

import {FaGrav} from "react-icons/fa";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';

import "./styles.scss";

const NavbarMenu = () => {
  const [title, setTitle] = useState("Project") 
  
  
  const changeDropdownTitle = (e) =>{
   const {name} =  e.target;
    e.preventDefault();
    setTitle(name)
    if(name === "theme"){
      document.styleSheets.background = "red"
    }
  }
  
  
 


  return (
  <Navbar  bg="dark" expand="lg" variant="dark" className='shadow-lg ' id="dark">
    <Container className='container'  id="container">
        <Navbar.Brand href="/" id="logo">
      
        <FaGrav id='spin' size={50}/>
       {' '}           
        Project adastra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-end '>
        <Nav className="me-auto rounded bg-dark ">
            <Link id='link' to="/" className="nav-link "><HomeRoundedIcon/>Home</Link>
            <Link id='link' to="/about" className="nav-link"><InfoRoundedIcon/>About Me</Link>
            <Link id='link' to="/skill" className="nav-link"><CodeRoundedIcon/>Skills</Link>
            <Link id='link' to="/portfolio" className="nav-link"><FindInPageRoundedIcon/>Portfolio</Link>
            <Link id='link' to="/contact" className="nav-link"><ContactsRoundedIcon/>Contact</Link>
            
            
            {/*this would be as alternative to portfoli card, or we can show on navbar projct NavDropDown*/}
            <NavDropdown title={title} id="basic-nav-dropdown">
              <NavDropdown.Item id='link' href="/#todolist"  name="ToDoList" className="nav-link" onClick={ (e) => changeDropdownTitle(e) }>ToDoList</NavDropdown.Item>
              <NavDropdown.Item id='link' href="/#theme"   name="theme" className="nav-link theme-bg" onClick={ (e) => changeDropdownTitle(e) }>Theme</NavDropdown.Item>
              <NavDropdown.Item id='link' href="/#test"   name="shoppingCard" className="nav-link theme-bg" onClick={ (e) => changeDropdownTitle(e) }>ShoppingCard</NavDropdown.Item>
             
            </NavDropdown>
            
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}

export default NavbarMenu;
