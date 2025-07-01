import { Wallet } from "lucide-react";

import SignInForm from "@/components/auth/sign-in-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const SignInPage = () => {
    return (
        <section className={"px-6"}>
            <header className={"text-center"}>
                <h1
                    className={
                        "flex items-center justify-center gap-x-1.5 text-primary"
                    }
                >
                    <Wallet className="h-8 w-8 text-green-600" />
                    <span className="ml-2 text-xl font-bold">BudgetWise</span>
                </h1>
                <p className={"text-muted-foreground"}>
                    Welcome back! Sign in to your account
                </p>
            </header>
            <Card className={"mt-8"}>
                <CardHeader className={"text-center"}>
                    <CardTitle className={"text-xl"}>Sign In</CardTitle>
                    <CardDescription>
                        Enter your email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={"flex items-center gap-x-4"}>
                        <Button className={"block flex-1/2"}>GitHub</Button>
                        <Button className={"block flex-1/2"}>Google</Button>
                    </div>
                    <div className={"my-6 flex items-center gap-x-2"}>
                        <span className={"h-[1px] grow bg-black/40"} />
                        <span className={"text-sm text-muted-foreground"}>
                            OR CONTINUE WITH
                        </span>
                        <span className={"h-[1px] grow bg-black/40"} />
                    </div>
                    <SignInForm />
                </CardContent>
            </Card>
        </section>
    );
};

export default SignInPage;
