import { TaskActionTypes } from "./task.types";
const INITIAL_STATE={
    tasks : [],
    id : 0,
    completedTasks : []
}

const taskReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            const taskToDo = {
                task : action.payload,
                id : state.id
            }
            return{
                ...state,
                tasks : [...state.tasks, taskToDo],
                id : state.id + 1
            }
        case TaskActionTypes.REMOVE_TASK:
            return{
                ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload)
            }
        case TaskActionTypes.EDIT_TASK:
            return{
                ...state,
                tasks : state.tasks.forEach(task =>{ 
                    if(task.id === action.payload.id){
                        task.task = action.payload.task
                    }})
            }
        case TaskActionTypes.TASK_COMPLETED:
            return{
                ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload.id),
                completedTasks : [...state.completedTasks, action.payload]
            }
        case TaskActionTypes.REMOVE_COMPLETED_TASK:
            return{
                ...state,
                tasks : [...state.tasks, action.payload],
                completedTasks : state.completedTasks.filter(task => task.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default taskReducer;