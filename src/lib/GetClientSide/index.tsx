import axios from './axios';
import pick from 'lodash/pick';
import { UserModel, ResponseError, TokenModel } from '../../models'

/**
 * Promise error whe:
 * - Server return status != 200 (axios)
 * - Network request has problem
 */

/**
 * Login
 * @param username string
 * @param password string
 */
export const userLogin = async (username: string, password: string): Promise< { user: UserModel, token: TokenModel }> => {
  try {
    const userLoginRespone = await axios.post('/api/users/login', { username, password });
    const userInfo: UserModel = pick(userLoginRespone.data.data, ['id', 'email', 'username', 'bio', 'image']);
    const token: TokenModel = userLoginRespone.data.data.token;
    return { user: userInfo, token };
  } catch (err) {
    if(err.response && err.response.data) {
      const errorRp: ResponseError = err.response.data;
      return Promise.reject(errorRp);
    }
    return Promise.reject(err.message || 'Request login failed!');
  }
}

type UserResiterParams = {
  
} 

export const userRegister = async ({username, email, password} : {username: string, password: string, email: string}): Promise< { user: UserModel, token: TokenModel }> => {
  try {
    const userRegisterResponse = await axios.post('/api/users/register', { username, password, email });
    const userInfo: UserModel = pick(userRegisterResponse.data.data, ['id', 'email', 'username', 'bio', 'image']);
    const token: TokenModel = userRegisterResponse.data.data.token;
    return { user: userInfo, token };
  } catch (err) {
    if(err.response && err.response.data) {
      const errorRp: ResponseError = err.response.data;
      return Promise.reject(errorRp);
    }
    return Promise.reject(err.message || 'Request register failed!');
  }
}
