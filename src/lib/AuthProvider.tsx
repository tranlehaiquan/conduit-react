import React from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';

import { USER_TOKEN } from '../constant';
import { UserModel, TokenModel } from '../models';
import AuthContext from './AuthContext';

const AuthProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [ user, setUser ] = React.useState<UserModel | undefined>();
  const [ loading, setLoading ] = React.useState(false);
  const [ isAuthenticated, setIsAuthenticated ] = React.useState<boolean>(false);
  const router = useRouter();
  
  const logout = (): void => {
    jsCookie.remove('user_token');
    setLoading(false);
    setUser(undefined);
    setIsAuthenticated(false);
  };

  React.useEffect(() => {
    if(!jsCookie.get(USER_TOKEN)) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const fetchUserRequest = await axios.get('/api/users', {
          headers: {
            Authorization: jsCookie.get(USER_TOKEN),
          },
        });
  
        const { username, id, email, bio, image }: UserModel = fetchUserRequest.data.data;
        setUser({ id, email, bio, image, username });
        setIsAuthenticated(true);
      } catch (err) {
        console.log('User_token is invaild', err);
        router.push('/login');
        jsCookie.remove(USER_TOKEN);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  function setUserLogin(userInfo : { user: UserModel, token: TokenModel }): void {
    const token = userInfo.token;
    setUser(userInfo.user);
    setIsAuthenticated(true);
    jsCookie.set('user_token', 'Bearer ' + token.token, {
      expires: new Date(Date.now() + token.exp),
    });
  }

  return (
    <AuthContext.Provider value={{user, loading, setUserLogin, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default  AuthProvider;
