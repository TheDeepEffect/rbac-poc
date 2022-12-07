import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import { mockUsers } from "./config/user.mock";
import { getBrowserRoutes } from "./utils/config";

function App() {
  const routesArr = getBrowserRoutes(routes, mockUsers[0]);
  const router = createBrowserRouter(routesArr);
  return <RouterProvider router={router} />;
}

export default App;
