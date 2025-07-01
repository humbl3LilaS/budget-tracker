"use client";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "@/frontend/layout/auth-layout";
import LandingPage from "@/frontend/pages/landing";
import RootPage from "@/frontend/pages/root";
import SignInPage from "@/frontend/pages/sign-in";
import SignUpPage from "@/frontend/pages/sign-up";
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
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "sign-in", element: <SignInPage /> },
            { path: "sign-up", element: <SignUpPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
