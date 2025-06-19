"use client";
import { createBrowserRouter, RouterProvider } from "react-router";

import LandingPage from "@/frontend/routes/landing-page";
import RootPage from "@/frontend/routes/root";
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
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
