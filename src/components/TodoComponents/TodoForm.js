import React from 'react'

function TodoForm(props){
    return(
        <form onSubmit={props.addTask}>
            <input
            type="text"
            name="taskInput"
            placeholder="task input"
            value={props.taskInput}
            onChange={props.changeHandler}
            />
            <button>Submit</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;