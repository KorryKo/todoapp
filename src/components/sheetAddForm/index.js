import React from 'react'
import {Button, Col, Form, Input, Row} from 'antd';
import {PlusCircleFilled} from '@ant-design/icons';
import "./style.css"
import {useDispatch} from "react-redux";
import {addNewTask} from "../../redux/actions";

const SheetAddForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const onFinish = () => {
        dispatch(addNewTask(form.getFieldValue('name')))
        form.resetFields();
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form"
        >
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item
                        name={'name'}
                        rules={[{required: true, message: 'This field is required'}]}
                    >
                        <Input placeholder="What needs to be done?"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled/>
                        Add todo
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SheetAddForm