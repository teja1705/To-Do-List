import { TaskActionTypes } from "./task.types";

export const addTask = (task)=>{
    return{
        type:TaskActionTypes.ADD_TASK,
        payload:task
    }
}
export const removeTask = (taskId)=>{
    return{
        type : TaskActionTypes.REMOVE_TASK,
        payload : taskId
    }
}
export const editTask = (id, task)=>{
    const taskToedit = {
        task : task,
        id : id
    }
    return{
        type: TaskActionTypes.EDIT_TASK,
        payload : taskToedit
    }
}

export const completedTask = (id,task)=>{
    const CompletedTask = {
        task : task,
        id : id
    }
    return{
        type : TaskActionTypes.TASK_COMPLETED,
        payload : CompletedTask
    }
}

export const removeCompletedTask = (id, task)=>{
    const CompletedTask = {
        task : task,
        id : id
    }
    return{
        type : TaskActionTypes.REMOVE_COMPLETED_TASK,
        payload : CompletedTask
    }
}