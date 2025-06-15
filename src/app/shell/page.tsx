"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("@/frontend/app"), { ssr: false });

function Page() {
    return <App />;
}

export default Page;
