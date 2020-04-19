import jsCookie from 'js-cookie';
import { USER_TOKEN } from '../constant';
import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';

function getUserToken(ctx: NextPageContext): string | undefined {
  if(process.browser) {
    return jsCookie.get(USER_TOKEN);
  } else {
    const cookies = nextCookie(ctx);
    return cookies[USER_TOKEN];
  }
}

export default getUserToken;
