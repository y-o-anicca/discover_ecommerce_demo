import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Views from "./views";
import reportWebVitals from "./reportWebVitals";
import * as Urql from "urql";
import { cacheExchange, createClient, fetchExchange } from "urql";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Criteria from "./views/criteria";
import Partners from "./views/partners";
import Account from "./views/account";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

console.log(process.env)
const client = createClient({
  url: `http://${process.env.REACT_APP_API_SERVER_HOST}:${process.env.REACT_APP_API_SERVER_PORT}/query`,
  exchanges: [cacheExchange, fetchExchange],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Views />,
    children: [
      {
        index: true,
        element: <Criteria />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "criteria",
        element: <Criteria />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Urql.Provider value={client}>
      <RouterProvider router={router} />
    </Urql.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
