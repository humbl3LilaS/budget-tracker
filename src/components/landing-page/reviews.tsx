import ReviewCard from "@/components/landing-page/review-card";
import { REVIEWS } from "@/lib/constants";

import { Badge } from "../ui/badge";

const Reviews = () => {
    return (
        <section>
            <div className={"py-10 px-4 lg:py-20 md:px-8 bg-[#f4f4f5]/50"}>
                <div className={"text-center"}>
                    <Badge
                        className={
                            "block mx-auto mb-3 md:text-[14px] md:px-5 md:py-2 md:rounded-full"
                        }
                        variant={"cta"}
                    >
                        Reviews
                    </Badge>
                    <h2 className={"text-2xl font-bold lg:text-4xl"}>
                        Trusted by thousands of users
                    </h2>
                    <p
                        className={
                            "max-w-[700px] mx-auto mt-4 text-[#999] lg:text-lg"
                        }
                    >
                        Join the community of people who have taken control of
                        their finances with BudgetWise.
                    </p>
                </div>
                <div
                    className={"mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"}
                >
                    {REVIEWS.map((item) => (
                        <ReviewCard {...item} key={item.userName} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
