import { targetPage } from "./index";
import { Home, Layout, ErrorPage} from "../layout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            // 기본경로
            {
                index: true, // 기본 경로 ("/")
                element: <Home />,
            },

            // targetPage 별도 관리
            ...Object.values(targetPage).map((page) => ({
                path: page.path,
                element: page.to,
            })),
        ]
    },
]);

export default router;