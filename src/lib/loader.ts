import type { LoaderFunction } from "react-router";

import { redirect } from "react-router";

import { authClient } from "@/lib/auth-client";

import type { BasicUserInfo } from "../../app.types";

export const authLoader: LoaderFunction = async ({ request }) => {
    const { data } = await authClient.getSession();
    if (request.url.includes("/landing-page")) {
        return data;
    }
    if (!data) {
        return redirect("/landing-page");
    }
    return {
        userId: data.user.id,
        email: data.user.email,
        userName: data.user.name,
    } as BasicUserInfo;
};
