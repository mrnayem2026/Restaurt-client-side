import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Blog from "../page/Blogs/Blog";
import Register from "../page/Register/Register";
import Chef from "../components/Chef/Chef";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/chef',
        children: [
          {
            path: ':id',
            element:<ChefRecipe></ChefRecipe>,
            loader: ({ params }) => fetch(`http://localhost:3000/chef/${params.id}`)
          }
        ]
      }

    ]
  },
]);

export default router;