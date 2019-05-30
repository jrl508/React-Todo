import React from 'react'

function TodoForm(props){
    return(
        <form>
            <input
            type="text"
            name="taskInput"
            placeholder="task input"
            value={props.taskInput}
            onChange={props.changeHandler}
            />
            <button onClick={props.addTask}>Submit</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;