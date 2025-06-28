"use client";

import { trpc } from "@/trpc/client";

function RootPage() {
    const budget = trpc.budget.get.useQuery();
    if (!budget.data) {
        return <div>Loading.....</div>;
    }
    return (
        <div>
            <h1>Home</h1>
            <p>
                {budget.data.name}:{budget.data.amount}
            </p>
        </div>
    );
}

export default RootPage;
