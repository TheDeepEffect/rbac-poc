import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { usePermission } from "../../components/RBAC/hooks/usePermission";
import { routesConfig } from "../../config/routes_config";

const AdminSettings = () => {
  const { adminType } = useParams();
  const { hasPermissionToVisit } = usePermission();
  if (
    adminType === "sp" &&
    hasPermissionToVisit(
      routesConfig.index.children.admin.children.adminSetting.path
    )
  ) {
    return (
      <div className="adminSettings">
        Service Providers Admins Settings Page
        <div className="buttonRow">
          <Button action="CREATE">Create New SP Admin</Button>
          <Button action="UPDATE">Update SP Admin</Button>
          <Button action="DELETE">Delete SP Admin</Button>
        </div>
      </div>
    );
  } else if (
    adminType === "org" &&
    hasPermissionToVisit(
      routesConfig.index.children.admin.children.adminSetting.path
    )
  ) {
    return (
      <div className="adminSettings">
        Organization Admins Settings Page
        <div className="buttonRow">
          <Button action="CREATE">Create New Org Admin</Button>
          <Button action="UPDATE">Update Org Admin</Button>
          <Button action="DELETE">Delete Org Admin</Button>
        </div>
      </div>
    );
  }
  return <div className="adminSettings">Something went wrong!</div>;
};
export default AdminSettings;
