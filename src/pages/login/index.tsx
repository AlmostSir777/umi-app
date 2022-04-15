import styles from './index.less';
import type { FC } from 'react';
import React from 'react';
import { Form, Input, Button } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import type { Dispatch } from 'umi';
import { connect } from 'umi';

const formItemLayout = {
  wrapperCol: { span: 24 },
};

interface LoginFormProps {
  dispatch: Dispatch;
  login: any;
  loading: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ login, dispatch, loading }) => {
  const { isError } = login;

  const onFinish = (values: any) => {
    console.log(values);
    dispatch({
      type: 'login/queryLogin',
      payload: {
        username: values.userName,
        password: values.passWord,
        isAutoLogin: false,
      },
    });
  };

  const handleChange = () => {
    if (isError) {
      dispatch({
        type: 'login/save',
        payload: {
          isError: false,
        },
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <div style={{ color: '#f5222d', marginBottom: 8, height: 26 }}>
          {isError && (
            <span>
              <ExclamationCircleOutlined style={{ marginRight: 4 }} />
              用户名或密码错误，请核对后重新输入
            </span>
          )}
        </div>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            onChange={handleChange}
            placeholder="请输入用户名: admin"
          />
        </Form.Item>
        <Form.Item
          name="passWord"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码最少6位数' },
            { max: 18, message: '密码最多18位数' },
            {
              pattern: new RegExp('^\\w+$', 'g'),
              message: '账号必须字母或数字',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            autoComplete="off"
            onChange={handleChange}
            placeholder="请输入密码: 123456"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: '100%' }}
          >
            {loading ? '登录中' : '登录'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ login, loading }: { login: any; loading: any }) => ({
  login,
  loading: loading.models.login,
}))(LoginForm);
