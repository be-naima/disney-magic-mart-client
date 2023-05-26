import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Accounts/Login";
import Register from "../Pages/Accounts/Register";
import AllToys from "../Pages/All Toys/AllToys";
import ToyDetail from "../Pages/All Toys/ToyDetail";
import Home from "../Pages/Home/Home";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import Blog from "../Pages/Blog/Blog";
import Error from "../Error/Error"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'blogs',
            element: <Blog></Blog>
        },
        {
          path:'login',
          element: <Login></Login>
      },
        {
          path:'register',
          element: <Register></Register>
      },
      {
        path:'alltoys',
        element: <AllToys></AllToys>
    },
      {
        path:'addtoy',
        element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
    },
    {
      path:'mytoys',
      element: <PrivateRouter><MyToys></MyToys></PrivateRouter>
  },
      {
        path:'toydetails/:id',
        element: <PrivateRouter><ToyDetail></ToyDetail></PrivateRouter>,
        loader: ({params})=>fetch(`https://disney-magic-mart-server.vercel.app/toys/${params.id}`)
    },
      {
        path:'toyupdate/:id',
        element: <UpdateToy></UpdateToy> ,
        loader: ({params})=>fetch(`https://disney-magic-mart-server.vercel.app/toys/${params.id}`)
    }
    
      ]
    },
  ]);

  export default router;