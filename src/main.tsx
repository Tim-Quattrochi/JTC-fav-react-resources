import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import Technology, {
  loader as resourceLoader,
  action as resourceAction,
} from "./routes/content.tsx";
import "./index.css";
import Landing from "./components/Landing/Landing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "resource/:name",
        element: <Technology />,
        loader: resourceLoader,
        action: resourceAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
