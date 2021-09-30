export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TASK_IS_DONE = 'TASK_IS_DONE';
export const UNDONE_TASK = 'UNDONE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK'

export const addNewTask = (title) => {
    return {
        type: ADD_NEW_TASK,
        title: title
    }
};

export const taskIsDone = (id) => {
    return {
        type: TASK_IS_DONE,
        id: id
    }
};

export const taskIsUndone = (id) => {
    return {
        type: UNDONE_TASK,
        id: id
    }
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id: id
    }
};

export const editTask = (newTask, id) => {
    return {
        type: EDIT_TASK,
        newTask: newTask,
        id: id
    }
}

