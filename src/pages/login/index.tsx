import { Button } from 'antd';
import * as React from 'react';
import type { FC } from 'react';
import {
  LoginUserInfoState,
  ConnectProps,
  Loading,
  connect,
  history,
} from 'umi';
import styles from './index.less';
import type { Dispatch } from 'umi';

interface LoginFromProps extends ConnectProps {
  dispacth: Dispatch;
  login: any;
  loading: boolean;
}

const LoginPage: FC<LoginFromProps> = ({ login, dispatch, loading }) => {
  return (
    <div className={styles.loginContainer}>
      <input placeholder="用户名" className={styles.usernameInput}></input>
      <input placeholder="密码" className={styles.passwordInput}></input>
      <Button className={styles.loginBtn}>登录</Button>
    </div>
  );
};

export default connect(
  ({ login, loading }: { login: LoginUserInfoState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginPage);
