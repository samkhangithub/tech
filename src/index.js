import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createBrowserRouter , RouterProvider} from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import Home from "./Componentss/Home/Home";
import About from "./Componentss/About/About";
import Services from "./Componentss/Our Services/Services";
import Contact from "./Componentss/Contacts/Contact";
import Portfolio from "./Componentss/Portfolio/portfolio";
import RouterPage from './Router'
import Odoo from './Componentss/Our Services/Odoo';
import Eor from './Componentss/Our Services/Eor';
import GlobalIT from './Componentss/Our Services/GlobalIT';
import Gulf from './Componentss/Our Services/Gulf';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <RouterPage /> ,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
        
      },
      {
        path: "/odoo",
        element: <Odoo />,
      },
      {
        path: "/eor",
        element: <Eor />,
      },
      {
        path: "/global",
        element: <GlobalIT />,
      },
      {
        path: "/gulf",
        element: <Gulf />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
