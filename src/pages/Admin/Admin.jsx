import { Link, Outlet } from "react-router-dom"
import { routesConfig } from "../../config/routes_config";

const Admin=()=>{
    return  <div>
    <header>
      <ul>
        <li>
          <Link
        to={routesConfig.index.children.admin.children.adminSetting.path_string({adminType:'sp'})}>
          Service Provider Admin
        </Link>
        </li>
        <li>
          <Link
        to={routesConfig.index.children.admin.children.adminSetting.path_string({adminType:'org'})}>
          Org Admin
          </Link>
          </li>
      </ul>
    </header>
    <section>
      Admin Page
      <Outlet/>
    </section>
  </div>
}

export default Admin;