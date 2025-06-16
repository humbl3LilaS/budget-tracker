import { Grid3X3, Info, Wallet } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import MobileNav from "@/features/landing-page/mobile-nav";

const Nav = () => {
    return (
        <nav>
            <div className={"p-4 md:p-8 flex justify-between items-center"}>
                <h1 className={"text-muted-foreground"}>
                    <Link to="/" className="flex items-center justify-center">
                        <Wallet className="h-8 w-8 text-green-600" />
                        <span className="ml-2 text-xl font-bold">
                            BudgetWise
                        </span>
                    </Link>
                </h1>
                <MobileNav />
                <ul className={"flex gap-x-8"}>
                    <li className={"py-2"}>
                        <Link
                            to={"#features"}
                            className={"flex items-center gap-2"}
                        >
                            <Grid3X3 className="aspect-square h-5" /> Features
                        </Link>
                    </li>
                    <li className={"py-2"}>
                        <Link
                            to={"#about"}
                            className={"flex items-center gap-2"}
                        >
                            <Info className="aspect-square h-5" />
                            About
                        </Link>
                    </li>
                    <li>
                        <Button asChild={true}>
                            <Link to={"/auth/sign-in"}>Sign In</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
