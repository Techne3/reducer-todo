import React, {useState, useReducer} from 'react'
import {reducer, initialState} from '../reducer/todoReducer'
import TodoList from './TodoList'


const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);



    const handleChanges = e => {
        setNewTodo(e.target.value);
      };
    
      const submitChange = e => {
        e.preventDefault() 
      }


      const addTodos = e => {
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setNewTodo("");
      }

    return (
     <div>
         <form onSubmit={submitChange} className="formWrap">
            <input
                type="text"
                name="newTitleText"
                value={newTodo}
                onChange={handleChanges}
            />
            <button className="btns"  onClick={addTodos}
            >Add Todo</button>

            <button className="btns"  onClick ={() => {
                dispatch({type: "CLEAR_TODO", payload: ''})
                setNewTodo(" ");
            }}
            >Clear</button>



         </form>
      {state.todos.map(items => (
        
        <div
          className={items.completed ?  "complete" : "todo"}
          onClick={() => dispatch({ type:"TOGGLE", payload: items.id })}
        >
            <TodoList todos= {items}  /> 
         
        </div>
      ))}
    </div>
    )
}


export default Todo