import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path: "/",
            element: <Main></Main>
        },
        {
            path : 'login',
            element : <Login></Login>
        }

      ]
    },
  ]);

export default router;