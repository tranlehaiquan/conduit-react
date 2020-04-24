// happen in browser
import { createContext } from 'react';
import { UserModel, TokenModel } from '../models';

export interface AuthContext {
  user?: UserModel;
  logout: () => void;
  setUserLogin: ({
    user,
    token,
  }: {
    user: UserModel;
    token: TokenModel;
  }) => void;
  value?: string;
  loading?: boolean;
  isAuthenticated: boolean;
}

export default createContext<AuthContext>({
  setUserLogin: () => {
    throw new Error('setUser is not initialized');
  },
  logout: (): void => {
    throw new Error('logout was not initialized');
  },
  isAuthenticated: false,
});
