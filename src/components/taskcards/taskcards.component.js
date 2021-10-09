import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCompletedTasks, selectTasks } from "../../redux/task.selector";
import './taskcards.styles.scss';
import { connect } from "react-redux";
import Task from "../task/task.component";

const TaskCards = ({tasks, completedTask})=>{
    return(
        <div className="taskcards">
            {
                tasks.map(task => (
                    <Task key={task.id} addtask={true} {...task}/>
                ))
            }
            {
                completedTask.length ?
                <div className="completedtasks">
                    <h1>Completed Tasks</h1>
                    {
                        completedTask.map(task => (
                            <Task  key={task.id} completedtask {...task}/>
                        ))
                    }
                </div>
                :
                null
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    tasks : selectTasks,
    completedTask : selectCompletedTasks
})

export default connect(mapStateToProps)(TaskCards);