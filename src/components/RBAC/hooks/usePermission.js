import { useCallback } from "react";
import { mockUsers } from "../../../config/user.mock";
import { useLocation, matchRoutes } from "react-router-dom";

export const usePermission = (user = mockUsers[0]) => {
  const { permissions = [] } = user;
  const location = useLocation();

  const hasPermissionToVisit = useCallback(
    (path) => {
      return permissions?.some((x) => {
        if (x?.validPathnames?.length) {
          return (
            x.path === path && x.validPathnames.includes(location.pathname)
          );
        } else {
          return x.path === path;
        }
      });
    },
    [permissions, location]
  );

  const hasActionPermisson = (action) => {
    const [{ route }] = matchRoutes(permissions, location);
    return route.actions?.[action];
  };
  return {
    hasPermissionToVisit,
    hasActionPermisson,
  };
};
