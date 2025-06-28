"use client";
import { createBrowserRouter, RouterProvider } from "react-router";

import LandingPage from "@/frontend/pages/landing";
import RootPage from "@/frontend/pages/root";
import { authLoader } from "@/lib/loader";

const router = createBrowserRouter([
    {
        path: "/",
        loader: authLoader,
        children: [
            {
                index: true,
                element: <RootPage />,
            },
        ],
    },
    {
        path: "/landing-page",
        element: <LandingPage />,
        loader: authLoader,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
