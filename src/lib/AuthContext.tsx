// happen in browser
import { createContext } from 'react';
import jsCookie from 'js-cookie';
import axios from 'axios';
import { UserModel } from '../models';

export interface AuthContext {
  user?: UserModel;
  login: (username: string, password: string) => Promise<UserModel>;
  logout: () => void;
  value?: string;
  loading?: boolean;
  isAuthenticated: boolean;
};

export default createContext<AuthContext>({
  login: (username: string, password: string): Promise<UserModel> => {
    throw new Error('login was not initialized');
  }, 
  logout: (): void => {
    throw new Error('logout was not initialized');
  },
  isAuthenticated: false,
});
