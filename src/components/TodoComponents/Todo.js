import React from 'react';

function Todo(props){
    return(
        <div 
        className={`todo ${props.task.completed ? 'complete' : ''}`}
        onClick={()=> props.crossTask(props.task.id)}
        >
            <p>
                {props.task.task}
            </p>
        </div>
    )
}

export default Todo;