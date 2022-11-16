import React,{useState,createContext} from 'react';
import Form from "react-bootstrap/Form";
export const SearchCreateContext = createContext("");


const TodoSearch = (props) => {
    let [searchParam, setSearchParam] = useState();
   
   
 

     
  return (
    <SearchCreateContext.Provider value={searchParam}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Search a todo" onChange={(e) => setSearchParam(e.target.value)} />
        </Form.Group>
    </SearchCreateContext.Provider>
  );
}

export default TodoSearch;
