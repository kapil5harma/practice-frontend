import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Input, Button } from 'antd';
import './ForgotPasswordForm.scss';

class NormalForgotPasswordForm extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authenticateForgotPassword } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        authenticateForgotPassword({ ...values });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      history
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className='forgot-password-form ForgotPasswordForm'>
        <div className='form-title'>Forgot Password</div>
        <Form.Item label='REGISTERED EMAIL ADDRESS' className='input-row'>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please enter your Email ID!' }]
          })(<Input placeholder='for ex: email@something.com' />)}
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <span
            className='forgot-password-form-forgot pointer'
            onClick={() => {
              history.push('/login');
            }}
          >
            Remember your password?
          </span>
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <Button type='primary' htmlType='submit' className='forgot-password-form-button'>
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const ForgotPasswordForm = Form.create({ name: 'normal_forgot_password' })(NormalForgotPasswordForm);
