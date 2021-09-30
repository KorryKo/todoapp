import {combineReducers} from 'redux';
import {ADD_NEW_TASK, EDIT_TASK, REMOVE_TASK, TASK_IS_DONE, UNDONE_TASK} from "../actions"
import {generateUuid} from "../../utils";

const initialState = {
    todos: []
}

const todos = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...state,
                {
                    id: generateUuid(),
                    title: action.title,
                    done: false
                }
            ]

        case TASK_IS_DONE:
            return state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        done: true
                    }
                } else {
                    return task
                }
            })

        case UNDONE_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        done: false
                    }
                } else {
                    return task
                }
            })

        case REMOVE_TASK:
            return state.filter(task => task.id !== action.id)
        case EDIT_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        title: action.newTask
                    }
                } else {
                    return task
                }
            })
        default:
            return state
    }
}

const reducers = combineReducers({
    todos: todos
})

export default reducers