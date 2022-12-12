import React from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "../config/routes_config";
import { usePermission } from "./RBAC/hooks/usePermission";

export const Navbar = () => {
  const { hasPermissionToVisit } = usePermission();

  return (
    <nav>
      <ul>
        {React.Children.toArray(
          Object.keys(routesConfig.index.children).reduce((acc, key) => {
            if (hasPermissionToVisit(routesConfig.index.children[key].path)) {
              acc.push(
                <li>
                  <Link to={routesConfig.index.children[key].path}>
                    {routesConfig.index.children[key].name}
                  </Link>
                </li>
              );
            }
            return acc;
          }, [])
        )}
      </ul>
    </nav>
  );
};
