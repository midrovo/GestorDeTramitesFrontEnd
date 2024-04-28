import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AboutPage, ContactPage, HomePage, LoginPage, PuertoPage, TramitePage, TransportePage } from "../pages";

export const Rutas = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>,
    },
  
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "",
          element: <HomePage/>,
          
        },

        {
          path: "tramites",
          element: <TramitePage/>
        },

        {
          path: "about",
          element: <AboutPage/>
        },

        {
          path: "contactos",
          element: <ContactPage/>
        },

        {
          path: "transporte",
          element: <TransportePage/>
        },

        {
          path: "puerto",
          element: <PuertoPage/>
        },
      ],
      errorElement: <div>Error 404</div>,
    },
  
    {
      path: "/not-found",
      element: <div>404 Usuario no Existe</div>
    },  
]);