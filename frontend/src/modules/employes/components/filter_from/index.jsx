import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;



class FilterForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            values.work = Number(values.work);
            this.props.filter(values);
          });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
        <Form layout="inline" onSubmit={this.onSubmit}>
            <Form.Item>
            {getFieldDecorator('name', {
                })(
                    <Input
                        placeholder="Имя"/>
                )
            }
            </Form.Item>

            <Form.Item>
            {getFieldDecorator('surname', {
                })(
                    <Input
                        placeholder="Фамилия"/>
                )
            }
            </Form.Item>

            <Form.Item>
            {getFieldDecorator('number_room', {
                })(
                    <Input
                        placeholder="Номер комнаты"/>
                )
            }
            </Form.Item>

            <Form.Item>
            {getFieldDecorator('room_category', {
                initialValue: ""
                })(
                <Select style={{ width: 150 }}>
                    <Option value="">Класс комн.</Option>
                    <Option value="0">standard</Option>
                    <Option value="1">Apartmant</Option>
                    <Option value="2">Business</Option>
                    <Option value="3">De luxe</Option>
                    <Option value="4">President</Option>
                </Select>
                )
            }
            </Form.Item>

            <Form.Item>
            {getFieldDecorator('menu_category', {
                })(
                <Select style={{ width: 150 }}>
                    <Option value="">Катег. меню</Option>
                    <Option value="0">breakfast</Option>
                    <Option value="1">lunch</Option>
                    <Option value="2">dinner</Option>
                </Select>
                )
            }
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginRight: "10px"}}>
                    Поиск
                </Button>
                <Link to={`/emp/post/`}>
                    <Button type="secondary" htmlType="submit">
                        Добавить
                    </Button>
                </Link>

            </Form.Item>
        </Form>
        )
    }
}

export default Form.create()(FilterForm);
