import ErrorPage from "../layout/ErrorPage";
import Home from "../layout/Home";
import Layout from "../layout/Layout";
import Blog from "../pages/Blog";

const { createBrowserRouter } = require("react-router-dom");
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // 기본 경로 ("/")
                element: <Home />,
            },
            {
                path: "/Blog",
                element: <Blog />,
            },
        ]
    },
]);

export default router;