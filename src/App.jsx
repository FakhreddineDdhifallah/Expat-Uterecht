import Navbar from "./components/navbar/Navbar.jsx"
import "./layout.scss"
import HomePage from "./routes/homePage.jsx"
import ListPage from "./routes/listPage.jsx"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <HomePage />
      
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);







  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar/> 
    //   </div>
    //   <div className="content">
    //     <HomePage/>
    //   </div>
      
    
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App