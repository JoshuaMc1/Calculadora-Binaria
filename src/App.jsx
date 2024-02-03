import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Decimal from "./pages/Decimal";
import Octal from "./pages/Octal";
import Page404 from "./pages/errors/Page404";
import Layout from "./components/Layout";
import ErrorPage from "./pages/errors/ErrorPage";
import Hexadecimal from "./pages/Hexadecimal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/decimal",
          element: <Decimal />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/octal",
          element: <Octal />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/hexadecimal",
          element: <Hexadecimal />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/*",
          element: <Page404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
