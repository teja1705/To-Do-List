import { useState } from 'react';
import './App.css';
import { addTask } from './redux/task.action';
import { connect } from 'react-redux';
import InputField from './components/inputfield/inputfield.component';
import CustomButton from './components/custombutton/custombutton.component';
import TaskCards from './components/taskcards/taskcards.component' 

const App=({addTask})=>{
  const [task, setTask]= useState("");

  const handleInput = event => {
    setTask(event.target.value)
  }

  const handleSubmit = ()=>{
    addTask(task);
    setTask("");
  }

  return (
    <div className="App">
      <div className="todo">
        <InputField
          type={"text"}
          value={task}
          placeholder={"Add a task"}
          handleChange={handleInput}
        />
        <CustomButton
          handleSubmit={handleSubmit}>ADD</CustomButton>
      </div>
      <TaskCards />
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>({
  addTask : (task)=>dispatch(addTask(task)),
})

export default connect(null, mapDispatchToProps)(App);
