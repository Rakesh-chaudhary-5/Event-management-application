import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "./components/Events.jsx";
import CreateEventForm from "./components/CreateEventForm.jsx";

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
        path: "/upcoming-events",
        element: <Events />,
      },
      {
        path: "/create-event",
        element: <CreateEventForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
