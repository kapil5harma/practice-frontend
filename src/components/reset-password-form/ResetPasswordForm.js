import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Input, Button } from 'antd';
import './ResetPasswordForm.scss';

class NormalResetPasswordForm extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authenticateResetPassword } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        authenticateResetPassword({ ...values });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      history
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className='reset-password-form ResetPasswordForm'>
        <div className='form-title'>Reset Password</div>
        <Form.Item label='New Password' className='input-row'>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input New Password!' }]
          })(<Input placeholder='New Password' />)}
        </Form.Item>
        <Form.Item label='Confirm New Password' className='input-row'>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: "Password doesn't match!" }]
          })(<Input type='password' placeholder='Confirm New Password' />)}
        </Form.Item>
        <Form.Item className='flex justify-center reset-password-form-forgot-item'>
          <span
            className='reset-password-form-forgot pointer'
            onClick={() => {
              history.push('/login');
            }}
          >
            Back to Login
          </span>
        </Form.Item>
        <Form.Item className='flex justify-center'>
          <Button type='primary' htmlType='submit' className='reset-password-form-button'>
            RESET
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const ResetPasswordForm = Form.create({ name: 'normal_login' })(NormalResetPasswordForm);
