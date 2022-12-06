import { Link, Outlet } from "react-router-dom";
import { routesConfig } from "../config/routes_config";

const Home=()=>{
    return  <div>
    <header>
      <nav>
        <ul>
        <li><Link to={routesConfig.index.children.admin.path}>Admin</Link></li>
        <li><Link to={routesConfig.index.children.org.path}>Org</Link></li>
        <li><Link to={routesConfig.index.children.sp.path}>Service Providers</Link></li>
        </ul>
      </nav>
    </header>
    <section>
      <Outlet/>
    </section>
  </div>
}
export default Home;