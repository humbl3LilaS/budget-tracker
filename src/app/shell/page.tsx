"use client"

import dynamic from "next/dynamic";

const App = dynamic(() => import("@/frontend/app"), {ssr: false});

const Page = () => {
    return (
        <App/>
    );
};

export default Page;