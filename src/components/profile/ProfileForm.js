import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Input, Button } from 'antd';
import './ProfileForm.scss';
import { isEqual } from 'lodash';

class NormalProfileForm extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { update, history } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        update({ password: values.password, history });
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { username, email, form } = this.props;

    if (!isEqual(prevProps.username, username)) {
      form.setFieldsValue({ name: username });
    }
    if (!isEqual(prevProps.email, email)) {
      form.setFieldsValue({ email });
    }
  }

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className='profile-form ProfileForm'>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }]
          })(<Input className='input-row' disabled placeholder='Name' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input className='input-row' disabled placeholder='Email Address' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(<Input className='input-row' type='password' placeholder='Password' />)}
        </Form.Item>
        <Form.Item className='flex justify-start'>
          <Button htmlType='submit' className='profile-form-button'>
            Update
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const ProfileForm = Form.create({ email: 'normal_signup' })(NormalProfileForm);
