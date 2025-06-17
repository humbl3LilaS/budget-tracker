import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section>
            <div
                className={
                    "py-10 p-4 md:p-8 grid gap-y-8 lg:grid-cols-2 bg-[#eefcf3] lg:py-20"
                }
            >
                <div
                    className={
                        "rounded-lg overflow-hidden shadow-accent shadow-xl lg:col-start-2"
                    }
                >
                    <Image
                        src={"/assets/images/hero_image.svg"}
                        width={1200}
                        height={600}
                        alt={"Hero Image"}
                        className={"md:max-w-[500px] mx-auto"}
                    />
                </div>
                <div
                    className={
                        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:flex flex-col justify-center"
                    }
                >
                    <Badge className={"mb-1.5"} variant={"secondary"}>
                        <TrendingUp />
                        <span>Track.Save.Succeed</span>
                    </Badge>
                    <h2 className={"text-2xl font-bold lg:text-6xl"}>
                        Take Control of Your{" "}
                        <span className={"text-[#16a34a]"}>
                            Financial Future
                        </span>
                    </h2>
                    <p className={"mt-4 text-[#999] lg:text-lg"}>
                        Smart budgeting made simple. Track expenses, set goals,
                        and build wealth with our intuitive budget tracker
                        designed for real people.
                    </p>
                    <div
                        className={
                            "mt-4 flex flex-col gap-y-3 md:flex-row md:gap-x-4"
                        }
                    >
                        <Button asChild={true} className={"bg-[#16a34a]"}>
                            <Link to={"/"} className={"lg:text-md"}>
                                <span>View Source Code</span>
                                <ArrowRight />
                            </Link>
                        </Button>
                        <Button
                            asChild={true}
                            variant={"outline"}
                            className={"bg-blend-color md:min-w-40"}
                        >
                            <Link to={"/"} className={"lg:text-md"}>
                                Get Start
                            </Link>
                        </Button>
                    </div>
                    <p
                        className={
                            "mt-2 flex items-center gap-x-2 flex-wrap md:gap-x-6 "
                        }
                    >
                        <span className={"flex items-center gap-x-2"}>
                            <CheckCircle className={"text-[#16a43a] size-4"} />
                            <span className={"text-[#999]"}>
                                Open Source and Free
                            </span>
                        </span>
                        <span className={"flex items-center gap-x-2"}>
                            <CheckCircle className={"text-[#16a43a] size-4"} />
                            <span className={"text-[#999]"}>
                                In active development
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
