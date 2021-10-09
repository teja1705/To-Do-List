import React from "react";
import { connect } from "react-redux";
import { completedTask, removeCompletedTask, removeTask } from "../../redux/task.action";
import './task.styles.scss';

const Task = ({removeTask , task, id, addtask, completedtask, completedTask,removeCompletedTask})=>{
    const handleDelete = ()=>{
        removeTask(id)
    }
    const handleCompleteTask =()=>{
        completedTask(id, task)
    }
    const handleRemoveCompletedTask = ()=>{
        removeCompletedTask(id, task)
    }
    return(
        <div className="taskcard">
            <span className={`${completedtask} task`}>{task}</span>
            {
                addtask ?
                <div className="icons">
                    <i onClick={handleCompleteTask} className="fas fa-check"></i>
                    <i onClick={handleDelete} className="fas fa-times"></i>
                </div>
                :
                <i onClick={handleRemoveCompletedTask} className="fas fa-times"></i>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    removeTask : (taskId)=> dispatch(removeTask(taskId)),
    completedTask : (taskId, task)=>dispatch(completedTask(taskId, task)),
    removeCompletedTask : (taskId, task)=>dispatch(removeCompletedTask(taskId, task))
})

export default connect(null, mapDispatchToProps)(Task);