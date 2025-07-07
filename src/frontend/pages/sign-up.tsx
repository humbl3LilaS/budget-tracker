import { Github, Mail, Wallet } from "lucide-react";

import SignUpForm from "@/components/auth/sign-up-form";
import SocialBtn from "@/components/landing-page/social-btn";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
    const githubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    const googleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };
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
                    Create your account to start managing your finances
                </p>
            </header>
            <Card className={"mt-8"}>
                <CardHeader className={"text-center"}>
                    <CardTitle className={"text-xl"}>Create Account</CardTitle>
                    <CardDescription>
                        Enter your information to create your BudgetWise account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={"flex items-center gap-x-4"}>
                        <SocialBtn callback={githubSignIn}>
                            <Github />
                            <span>GitHub</span>
                        </SocialBtn>
                        <SocialBtn callback={googleSignIn}>
                            <Mail />
                            <span>Google</span>
                        </SocialBtn>
                    </div>
                    <div className={"my-6 flex items-center gap-x-2"}>
                        <span className={"h-[1px] grow bg-black/40"} />
                        <span className={"text-sm text-muted-foreground"}>
                            OR CONTINUE WITH
                        </span>
                        <span className={"h-[1px] grow bg-black/40"} />
                    </div>
                    <SignUpForm />
                </CardContent>
            </Card>
        </section>
    );
};

export default SignUpPage;
