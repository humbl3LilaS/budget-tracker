import FeatureCard from "@/components/landing-page/feature-card";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/lib/constants";

const Features = () => {
    return (
        <section>
            <div className={"py-10 px-4 lg:py-20 md:px-8"}>
                <div className={"text-center"}>
                    <Badge
                        className={
                            "block mx-auto mb-3 md:text-[14px] md:px-5 md:py-2 md:rounded-full"
                        }
                        variant={"secondary"}
                    >
                        Features
                    </Badge>
                    <h2 className={"text-2xl font-bold lg:text-4xl"}>
                        Everything you need to manage your money
                    </h2>
                    <p
                        className={
                            "max-w-[700px] mx-auto mt-4 text-[#999] lg:text-lg"
                        }
                    >
                        Powerful tools designed to help you understand your
                        spending, reach your goals, and build lasting financial
                        habits.
                    </p>
                </div>
                <div
                    className={"mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"}
                >
                    {FEATURES.map((item) => (
                        <FeatureCard {...item} key={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
