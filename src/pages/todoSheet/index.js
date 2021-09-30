import React from 'react'
import "./style.css"
import Layout from "../../layout";
import SheetList from "../../components/sheetList";
import SheetAddForm from "../../components/sheetAddForm";
import {useSelector} from "react-redux";

const TodoSheet = () => {

  const todos = useSelector(state => state.todos);

  return (
    <Layout>
      <SheetAddForm/>
      <SheetList todos={todos}/>
    </Layout>
  )
}

export default TodoSheet