import { CheckCircle, Construction, Github } from "lucide-react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";

import { Button } from "../ui/button";

const Notice = () => {
    return (
        <section>
            <div
                className={
                    "py-10 px-4 lg:py-20 md:px-8 bg-cta text-white text-center"
                }
            >
                <Badge
                    className={
                        "flex items-center gap-x-1 mx-auto mb-3 md:text-[14px] md:px-5 md:py-2 md:rounded-full"
                    }
                    variant={"cta"}
                >
                    <Construction className={"size-5"} /> Under Development
                </Badge>
                <h2 className={"text-2xl font-bold lg:text-4xl"}>
                    BudgetWise is Currently Under Development
                </h2>
                <p className={"max-w-[700px] mx-auto mt-4 lg:text-lg"}>
                    We're working hard to bring you the best budgeting
                    experience. While we perfect every feature, you can explore
                    our source code and contribute to the project.
                </p>
                <Button
                    variant={"outline"}
                    className={"mt-4 bg-transparent"}
                    asChild={true}
                >
                    <Link to={"/"}>
                        <Github /> View Source Code
                    </Link>
                </Button>
                <p
                    className={
                        "mt-5 flex justify-center items-center gap-x-2 flex-wrap md:gap-x-6 "
                    }
                >
                    <span className={"flex items-center gap-x-2"}>
                        <CheckCircle className={"size-4"} />
                        <span>Open Source</span>
                    </span>
                    <span className={"flex items-center gap-x-2"}>
                        <CheckCircle className={"size-4"} />
                        <span>Free to use</span>
                    </span>
                    <span className={"flex items-center gap-x-2"}>
                        <CheckCircle className={" size-4"} />
                        <span>Community Driven</span>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Notice;
