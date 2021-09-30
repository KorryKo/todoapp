import React from 'react'

import {Button, List, Popconfirm, Switch, Tooltip} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';

import "./style.css"
import {useDispatch} from "react-redux";
import {editTask, removeTask, taskIsDone, taskIsUndone} from "../../redux/actions";
import Text from "antd/es/typography/Text";

const SheetItem = ({todo}) => {

    const dispatch = useDispatch()

    const onTodoToggle = (todo) => {
        if (!todo.done) {
            dispatch(taskIsDone(todo.id))
        } else {
            dispatch(taskIsUndone(todo.id))
        }
    }

    const onTodoRemoval = (todo) => {
        dispatch(removeTask(todo.id))
    }

    const onChangeTask = (newTask, id) => {
        dispatch(editTask(newTask, id))
    }

    return (
        <List.Item
            actions={[
                <Tooltip
                    title={todo.done ? 'Done' : 'Undone'}
                >
                    <Switch
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                        onChange={() => onTodoToggle(todo)}
                        defaultChecked={todo.done}
                    />
                </Tooltip>,
                <Popconfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => {
                        onTodoRemoval(todo)
                    }}
                >
                    <Button className="remove-todo-button" type="primary" danger>
                        X
                    </Button>
                </Popconfirm>,
            ]}
            className="list-item"
            key={todo.id}
        >
            <div className="todo-item">
                <Text
                    editable={{
                        onChange: (newTask) => onChangeTask(newTask, todo.id),
                        maxLength: 50,
                        autoSize: {maxRows: 5, minRows: 3}
                    }}
                    type={todo.done ? 'success' : 'danger'}>
                    {todo.title}
                </Text>
            </div>
        </List.Item>
    );
}

export default SheetItem