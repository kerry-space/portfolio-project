import React,{useState, useEffect, createContext,useContext, Fragment} from 'react';


import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./todo.scss";
import TodoSearch,{SearchCreateContext} from './TodoSearch';

export const TodoCreateContext = createContext("test");



const TodoItem = () => {
    const [todo,setTodo] = useState([]);
    const [editData, setEditData] = useState(null);
    let searchParam = useContext(SearchCreateContext)
    

   const handleModifyTodo = (getlatestTodoItemDetails) =>{
      //we spread our object into newtodo array 
      const newtodo = [...todo];
      //we check condi if item already exist or not
       const indexOfLatestTodoItem = newtodo.findIndex(
        (item) => item.id === getlatestTodoItemDetails.id);


        if(indexOfLatestTodoItem === -1){ 
            //item is not present in the todo array
            newtodo.push(getlatestTodoItemDetails)
          }else{ 
            //if the item is already present then we have to modify that index in the array
            newtodo[indexOfLatestTodoItem] = {
              ...newtodo[indexOfLatestTodoItem],
              text : getlatestTodoItemDetails.text
            }
          }
        
        //set the new array 
        setTodo(newtodo);


    //save to my local storage
    localStorage.setItem("todoList", JSON.stringify(newtodo));
    }

    const getDeleteTodoData = (deletData) =>{
      let UpdateTodo = [...todo];
      UpdateTodo = UpdateTodo.filter((item) => item.id !== deletData);
      setTodo(UpdateTodo);
      localStorage.setItem("todoList", JSON.stringify(UpdateTodo));
  }
  
    const getEditTodoData = (editDat) =>{
      setEditData(editDat)
      localStorage.setItem("todoList", JSON.stringify(editDat));
    }

    //extract our save data from local storage
    useEffect(() => {
       const extractTodosFromLocalStorage = JSON.parse(localStorage.getItem("todoList"));
       if(extractTodosFromLocalStorage && extractTodosFromLocalStorage.length) setTodo(extractTodosFromLocalStorage)
    }, []);

   
   const filterTodo = todo && todo.length ? todo.filter((item) => item.text.toLowerCase().includes(searchParam)) : [todo];
   
  

  return (
    <TodoCreateContext.Provider  className='todo' value={{editData, handleModifyTodo, getDeleteTodoData,getEditTodoData,}}>
       <div className="todo__title">
        <h1>What's the Plan for today?</h1>
        <h3>Search Todos</h3>
      </div>
     
      
        <TodoSearch  />
      
        
      <TodoForm />
        
      {
        filterTodo && filterTodo.length ?(
          <TodoList  todo={filterTodo}/>
        ) :(
          <TodoList todo={todo}/>
        )
        
      }
    </TodoCreateContext.Provider>
  )
}

export default TodoItem




