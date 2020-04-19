import React from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';

import { USER_TOKEN } from '../constant';
import { UserModel } from '../models';
import AuthContext from './AuthContext';

const AuthProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [ user, setUser ] = React.useState<UserModel | undefined>();
  const [ loading, setLoading ] = React.useState(false);
  const [ isAuthenticated, setIsAuthenticated ] = React.useState<boolean>((): boolean => {
    if(!process.browser) return false;

    return !!jsCookie.get(USER_TOKEN);
  });
  const router = useRouter();

  const login = async (usernme: string, password: string): Promise<UserModel> => {
    setLoading(true);
    const mockUser: UserModel = {
      id: '123',
      email: '123',
      username: '123',
      bio: '123',
      image: '123',
    };
  
    setLoading(false);
    setUser(mockUser);
    return mockUser;
  };
  
  const logout = (): void => {
    jsCookie.remove('user_token');
    setLoading(false);
    setUser(undefined);
  };

  React.useEffect(() => {
    if(!jsCookie.get(USER_TOKEN)) return;

    const fetchUser = async () => {
      try {
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
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{user, loading, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default  AuthProvider;
