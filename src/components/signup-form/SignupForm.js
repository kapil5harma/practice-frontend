import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Input, Button } from 'antd';
import './SignupForm.scss';

class NormalSignupForm extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { signup, history } = this.props;
    console.log('this.props: ', this.props);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        signup({ ...values, history });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      history
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className='signup-form SignupForm'>
        <Form.Item className=''>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }]
          })(<Input className='input-row' placeholder='Name' />)}
        </Form.Item>
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
          <Button htmlType='submit' className='signup-form-button'>
            Signup
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const SignupForm = Form.create({ email: 'normal_signup' })(NormalSignupForm);
