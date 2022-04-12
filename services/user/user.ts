import request from '../../utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  isAutoLogin: boolean;
}
export interface UserInfoParamsType {
  userid: string;
}
export async function currentUser(body: any, options?: Record<string, any>) {
  return request('/api/currentUser', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function queryLogin(params: LoginParamsType) {
  return request('/LoginRegister/LoginWithPassword', {
    method: 'POST',
    data: params,
  });
}

export async function queryUserInfo(params: UserInfoParamsType) {
  return request('/api/userInfo', {
    method: 'POST',
    data: params,
  });
}

export async function logout(): Promise<any> {
  return request('/api/logout');
}
