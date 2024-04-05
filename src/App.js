import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import Error from "./pages/ErrorPage";

function App() {
  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path = "/" element = {<Home />} />
  //   <Route path = "/about" element = {<About />} />
  //   <Route path = "/items" element = {<Items />} />
  //   </>
  // ); 
  // const router1 = createBrowserRouter(routes);
 const router1 =  createBrowserRouter([
    {path :"/", element: <Navbar />, errorElement: <Error /> ,children:[
      {index: true, element:<Home /> },
    {path: "about", element: <About />},
    {path: "items", element: <Items />},
    {path: "items", children : [
      {index: true, element: <Items />},
      {path: ":ID", element: <ItemDetails />}
    ]}
    ]}
    
  ])
  return (<>
  <RouterProvider router = {router1}/>
  </>);
}

export default App;
