import React from 'react';

function Todo(props){
    return(
        <div 
        onClick={()=> props.crossTask(props.task.id)}
        >
            <p>
                {props.task.task}
            </p>
        </div>
    )
}

export default Todo;