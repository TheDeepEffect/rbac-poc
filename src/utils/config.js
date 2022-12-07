export const getBrowserRoutes = (routes, user) => {
  let route;
  if (Object.keys(routes).length) {
    return Object.keys(routes).reduce((acc, key) => {
      route = routes[key];
      const { id, path, Component } = route;
      let routeObj = {
        id,
        path,
        element: <Component />,
      };
      if (
        routeObj.id === "index" ||
        user?.permissions.some((x) => x.id === routeObj.id)
      ) {
        if (route?.children && Object.keys(route?.children).length) {
          routeObj["children"] = getBrowserRoutes(route.children, user);
        }

        acc.push(routeObj);
      }
      return acc;
    }, []);
  }
  return [];
};
