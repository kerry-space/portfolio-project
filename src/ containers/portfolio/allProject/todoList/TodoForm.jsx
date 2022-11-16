import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./todo.scss";
import { TodoCreateContext } from "./TodoItem";

const TodoForm = () => {
  //const {getNewlyCreatedTodoItem, editData} = props
  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState("");
  
  
  //recive pass param
  const {editData,handleModifyTodo} = useContext(TodoCreateContext);
  console.log(editData)

  const onChange = (e) =>{
    setInputValue(e.target.value);
    
   
  }

  const handleClick = (event) =>{
    event.preventDefault();
    const newlyCreatedTodo = {
      id : isEdit ? editData.id : Math.floor(Math.random()*1000),
      text :inputValue 
    }
    handleModifyTodo(newlyCreatedTodo);
    setInputValue("");
    setIsEdit(false)
   
  }

   
  useEffect(() =>{
    if(editData && Object.keys(editData).length !== 0){ 
      setInputValue(editData.text);
      setIsEdit(true)
    }
  },[editData]);






  
return (
    <div className="todo">
     
      <div className="todo__form">
        <div className="todo__form__group"  >
          <InputGroup className="mb-3">
            <Form.Control
              className="todo__form__group__add"
              placeholder="Add a todo"
              type="text"
              onChange={onChange}
              value={inputValue}
              
            />
          
            <Button className="todo__button" onClick={handleClick} type="submit" variant="outline-secondary" >
            {isEdit ? "edit Todo": "Add Todo"}
            </Button>
          </InputGroup>
        </div>
      </div>
    </div >
  );
};

export default TodoForm;
