import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { routesConfig } from "../config/routes_config";
import { mockUsers } from "../config/user.mock";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
export default Home;
