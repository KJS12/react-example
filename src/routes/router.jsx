import { targetPage } from "./index";
import { Home, Layout, ErrorPage} from "../layout";
import { createBrowserRouter, Outlet } from "react-router-dom";

const makeRoutes = (pages) => {
    return pages.map((page) => {
        const route = {
            path: page.path.replace(/^\//, ""), // 루트 슬래시 제거, 상대경로 맞춤
            element: page.to ? page.to : <Outlet />,
        };

        if (page.children) {
            route.children = makeRoutes(page.children);
            if (!page.to) {
                route.element = <Outlet />;
            }
        }

        return route
    });
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            // 기본 경로 ("/")
            {
                index: true,
                element: <Home />,
            },
            ...makeRoutes(targetPage.filter((p) => p.path !== "/"))
        ]
    },
]);

export default router;