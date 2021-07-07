import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state={
      tasks:[],
      taskInput: ""
    };

    changeHandler = (e) =>{
      e.preventDefault();
      console.log(e.target.value)
      this.setState(
        {
          [e.target.name]: e.target.value
        }
      )
    };
  
    addTask = (e) =>{
      e.preventDefault();
      const newTask={
        task: this.state.taskInput,
        id: Date.now(),
        completed:false
      }
      this.setState({
        tasks: [...this.state.tasks, newTask],
        taskInput:" "
      })
    }

    crossTask= (id) =>{
      this.setState({tasks: this.state.tasks.map(obj=>{
        if (obj.id===id){
          return{
            ...obj,
            completed: !obj.completed
          }
        } else{
          return obj
        }
      })
    })
  }
    clearComplete= (e) =>{
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.filter(task=> task.completed===false)
      })
    }

  render() {
    return (
      <div className= "app">
        <div className="header">
          <h1>Composition</h1>
          <h1>Book</h1>
        </div>
        <TodoForm taskInput={this.taskInput} changeHandler={this.changeHandler} addTask={this.addTask} clearComplete={this.clearComplete}/>
        <TodoList tasks={this.state.tasks} crossTask={this.crossTask}/>
      </div>
    );
  }
}

export default App;
