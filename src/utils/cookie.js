const TOKEN = 'token';

export const getTokenFromCookie = () => {
  const cookie = getCookies();

  return cookie[TOKEN];
}

export const setTokenFromCookie = (token) => {
  document.cookie = `${TOKEN}=${token}`
}

export const deletedTokenFromCookie = () => {
  document.cookie = TOKEN + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const getCookies = () => {
  const cookieString = document.cookie;
  if(!cookieString) return {}
  const listCookie = cookieString.split(";");
  const cookie = {};

  listCookie.forEach((cookieString) => {
    const [prop, value] = cookieString.split("=");
    cookie[prop.trim()] = value.trim();
  })

  return cookie;
}
