// 导出一个对象，该对象有如下几个属性：

export default {
  namespace: 'user', //string,命名空间，通过它来区分调用的哪一个模块的状态管理
  state: { username: undefined, isLogin: false }, //object,初始化状态，用于渲染视图
  reducers: {
    // 同步方法：修改状态
    /// state：原本的状态
    // payload：loginAsync传递过来的数据
    login(state, { payload }) {
      return { ...state, username: payload.username, isLogin: true };
    },
  }, //function-object,同步方法，用于修改初始化状态
  effects: {
      // payload就是传递过来的账号密码， call，put则是generator的关键字
      *loginAsync({payload}, {call, put}) {
          //* = promise的async, yield = promise的await
			//call调用请求方法：参数1：调用的请求方法，参数2：请求方法的参数
            
      }
  }, //function-object,异步方法，用于请求接口，然后调用同步方法修改数据
  subscriptions: {}, //function-object,生命周期，应用启动时调用定义好的方法
};
