import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './app.scss'
// ... (ваш импорт и код до Layout)

const Layout = () => {
  return (
      <div className="app">
        <div className="content">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
  );
};


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  },
])

function App() {
  return (
  <div>
     <RouterProvider router={router} />
  </div>
  )
}

export default App;
