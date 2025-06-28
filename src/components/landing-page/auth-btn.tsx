import { LayoutDashboard, LogIn } from "lucide-react";
import { Link, useLoaderData } from "react-router";

import type { BasicUserInfo } from "../../../app.types";

import { Button } from "../ui/button";

const AuthBtn = () => {
    const session = useLoaderData() as BasicUserInfo;
    return (
        <Button asChild={true}>
            {session
                ? (
                        <Link to={"/"}>
                            <LayoutDashboard />
                            <span>Dashboard</span>
                        </Link>
                    )
                : (
                        <Link to={"/auth/sign-in"}>
                            <LogIn />
                            <span>Sign In</span>
                        </Link>
                    )}
        </Button>
    );
};

export default AuthBtn;
