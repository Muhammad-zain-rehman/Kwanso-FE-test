import {TASK_CONST} from './constants'

export const getTasks = ()=>{ // get tasks from local storage
    let tasks = localStorage.getItem(TASK_CONST)
    if(tasks){
        return JSON.parse(tasks)
    }else{
        return false
    }
}

export const saveTask = (data)=>{ // save task into local storage
    let tasks = getTasks();
    let arr = []
    let obj={
        checked:false, 
        name:data
    }
    if(tasks){
        arr=[...tasks, obj]
    }else{
        arr.push(obj)
    }
    localStorage.setItem(TASK_CONST, JSON.stringify(arr))
}


