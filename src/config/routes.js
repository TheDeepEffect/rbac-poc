import Admin from "../pages/Admin/Admin";
import AdminSettings from "../pages/Admin/AdminSettings";
import Home from "../pages/Home";
import Org from "../pages/Org/Org";
import SingleOrg from "../pages/Org/SingleOrg";
import SingleSp from "../pages/SP/SingleSp";
import SP from "../pages/SP/SP";
import { routesConfig } from "./routes_config";

const routes={
    ...routesConfig,
    [routesConfig.index.id]:{
        ...routesConfig.index,
        Component:Home,
        children:{
            [routesConfig.index.children.admin.id]:{
                ...routesConfig.index.children.admin,
                Component:Admin,
                children:{
                    [routesConfig.index.children.admin.children.adminSetting.id]:{
                        ...routesConfig.index.children.admin.children.adminSetting,
                        Component:AdminSettings
                    },
                }
            },
            [routesConfig.index.children.org.id]:{
                ...routesConfig.index.children.org,
                Component:Org,
                children:{
                    [routesConfig.index.children.org.children.singleOrg.id]:{
                        ...routesConfig.index.children.org.children.singleOrg,
                        Component:SingleOrg
                    }
                }
            },
            [routesConfig.index.children.sp.id]:{
                ...routesConfig.index.children.sp,
                Component:SP,
                children:{
                    [routesConfig.index.children.sp.children.singleSp.id]:{
                        ...routesConfig.index.children.sp.children.singleSp,
                        Component:SingleSp
                    }
                }
            }
        }
    }
}

export default routes