import { createRoot } from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactUs } from "./Components/ContactUs";
import { Home } from "./Components/Home";
import { CountriesDetails } from "./Components/CountriesDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/:country",
        element: <CountriesDetails />,
      },
    ],
  },
]);
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router}/>);
