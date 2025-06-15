"use client";

import { trpc } from "@/trpc/client";

function RootPage() {
    const budget = trpc.budget.get.useQuery();
    if (!budget.data) {
        return <div>Loading.....</div>;
    }
    return (
        <div>
            {budget.data.name}
            :
            {budget.data.amount}
        </div>
    );
}

export default RootPage;
