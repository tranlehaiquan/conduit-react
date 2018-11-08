export const parseQueryString = ( queryString ) => {
  if(!queryString) return {};
  let params = {};
  let queries;
  let temp;
  let i;
  let l;

  if(queryString[0] === "?") {
    queryString = queryString.slice(1);
  }

  // Split into key/value pairs
  queries = queryString.split("&");
  // Convert the array of strings into an object
  for ( i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      params[temp[0]] = isNaN(+temp[1]) ? temp[1] : +temp[1];
  }
  return params;
};

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
