import React from 'react'
import "./style.css"
import {List} from 'antd';
import SheetItem from "../sheetItem";

const SheetList = ({todos}) => {
  return (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <SheetItem
          key={todo.id}
          todo={todo}
        />
      )}
      pagination={{
        position: 'bottom',
        pageSize: 10,
      }}
    />
  )
}

export default SheetList