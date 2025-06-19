import { redirect } from "react-router";

import { authClient } from "@/lib/auth-client";

export const authLoader = async () => {
    const { data } = await authClient.getSession();
    if (!data) {
        return redirect("/landing-page");
    }
};
