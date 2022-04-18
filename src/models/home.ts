import { Effect, Reducer } from 'umi';
import { history } from 'umi';
import { message } from 'antd';

export interface HomeModelState {
  count: number;
  show: boolean;
}

export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    addCount: Effect;
    back: Effect;
  };
  reducers: {
    save: Reducer<HomeModelState>;
  };
}

const HomeModel: HomeModelType = {
  namespace: 'home',
  state: {
    count: 10,
    show: false,
  },
  effects: {
    *addCount({ payload }, { call, put }) {
      console.log(payload);
      var count = payload.count + 10;
      yield put({
        type: 'save',
        payload: {
          count: count,
          show: count >= 100,
        },
      });
    },
    *back() {
      history.goBack();
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default HomeModel;
