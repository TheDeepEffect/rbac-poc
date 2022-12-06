import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './config/routes';
import { getBrowserRoutes } from './utils/config';

function App() {
  const routesArr=getBrowserRoutes(routes)
  // console.log(routesArr);
  const router=createBrowserRouter(routesArr);
  return (
   <RouterProvider
    router={router}
    />
  );
}

export default App;
