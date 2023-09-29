import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import ProductLine from './components/Product Line';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Acheivements from './components/Achievements';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/productline",
          element:<ProductLine/>
        },
        {
          path:"aboutus",
          element:<AboutUs/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
         path:"acheivements",
         element:<Acheivements/>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;