import React,{useContext, Fragment, useEffect} from "react";

import "./todo.scss";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoCreateContext } from "./TodoItem";

const TodoList = (props) => {
    const {todo} = props;
    
    //recive param from useContext
   const {getDeleteTodoData,getEditTodoData} = useContext(TodoCreateContext);
   
    
  return (
    <div>
      <ul className="todoItem">
        {todo.map((item, index) => {
          return (
            <div className="todoItem__wrapper" key={`${todo.id}${index}`}>
              <p className="todoItem__wrapper__text">{item.text}</p>
              <div className="todoItem__wrapper__icon">
                <RiCloseCircleLine onClick={()=> getDeleteTodoData(item.id)} className="delete-icon" />
                <TiEdit  className="edit-icon" onClick={()=> getEditTodoData({id: item.id, text: item.text})}/>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}; 

export default TodoList;
