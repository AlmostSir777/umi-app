import { Effect, Reducer } from 'umi';
import { history } from 'umi';
import { message } from 'antd';
import { queryLogin, logout } from '../../services/user/user';

export interface LoginModelState {
  username: string;
  password: string;
  isError: boolean;
}

export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    queryLogin: Effect;
  };
  reducers: {
    save: Reducer<LoginModelState>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    username: '',
    password: '',
    isError: false,
  },
  effects: {
    *queryLogin({ payload }, { call, put }) {
      const response = yield call(queryLogin, { ...payload });
      if (response != null && response.ResultTypeId === 1) {
        message.success('登录成功！');
        history.replace('/home');
      } else {
        message.success('登录成功！');
        history.replace('/home');
        // yield put({
        //   type: 'save',
        //   payload: {
        //     isError: true,
        //   },
        // });
      }
    },
  },
  reducers: {
    save(state, action) {
      console.log(action);
      console.log(state);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default LoginModel;
