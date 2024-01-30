import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
// import PrivateRoute from "./components/shared/PrivateRoute.jsx";
import "./index.css";
import Content from "./pages/Content.jsx";
// import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index={true} path="/" element={<Home />} /> */}
      {/* <Route path="/ai" element={<PrivateRoute />}> */}
      <Route path="/" element={<Content />} />
      {/* </Route> */}
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
