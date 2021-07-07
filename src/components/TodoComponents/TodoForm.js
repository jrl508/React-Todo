import React from 'react'

function TodoForm(props){
    return(
        <form className="todo-form">
            <input
            type="text"
            name="taskInput"
            placeholder="Write Something"
            value={props.taskInput}
            onChange={props.changeHandler}
            />
            <button onClick={props.addTask}>Submit</button>
            <button onClick={props.clearComplete}>Clear</button>
        </form>
    )
}

export default TodoForm;