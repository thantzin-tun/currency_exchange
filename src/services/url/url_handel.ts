import queryString from "query-string";

export const routeFilter = (obj: any) => {
  let paramObject = queryString.stringify(obj, { sort: false });
  return `?${paramObject}`;
};

export const handel_endPoint = (params: any, endPoint: string) => {
  let routeEndPoint: string;
  if (typeof params == "number" || typeof params == "string") {
    routeEndPoint = `${endPoint}${params}`;
  } else if (typeof params == "object") {
    let result = routeFilter(params);
    routeEndPoint = `${endPoint}${result}`;
  } else {
    routeEndPoint = endPoint;
  }
  return routeEndPoint;
};
