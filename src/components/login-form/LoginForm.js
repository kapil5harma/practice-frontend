import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Input, Button } from 'antd';
import './LoginForm.scss';

class NormalLoginForm extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authenticateLogin } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        authenticateLogin({ ...values });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      history
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className='login-form LoginForm'>
        <Form.Item className=''>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input className='input-row' placeholder='Email Address' />)}
        </Form.Item>
        <Form.Item className=''>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(<Input className='input-row' type='password' placeholder='Password' />)}
        </Form.Item>
        <Form.Item className='flex justify-start'>
          <Button htmlType='submit' className='login-form-button'>
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const LoginForm = Form.create({ email: 'normal_login' })(NormalLoginForm);
