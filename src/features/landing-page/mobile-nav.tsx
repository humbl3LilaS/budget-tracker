import { Grid3X3, Info, Menu } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild={true} className={"md:hidden"}>
                <Button variant={"outline"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className={"sr-only"}>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Mobile Navigation</SheetDescription>
                </SheetHeader>
                <SheetContent className={"pl-8 pr-6 "}>
                    <nav>
                        <ul className={"mt-14 flex flex-col gap-y-5"}>
                            <li className={"py-2"}>
                                <Link
                                    to={"#features"}
                                    className={"flex items-center gap-2"}
                                >
                                    <Grid3X3 className="aspect-square h-5" />{" "}
                                    Features
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
                                <Button asChild={true} className={"w-full"}>
                                    <Link to={"/auth/sign-in"}>Sign In</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </SheetContent>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
