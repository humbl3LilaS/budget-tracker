import { Star } from "lucide-react";

type ReviewCardProps = {
    userName: string;
    rating: number;
    review: string;
    occupation: string;
};
const ReviewCard = ({
    userName,
    review,
    rating,
    occupation,
}: ReviewCardProps) => {
    return (
        <article
            className={
                "p-6 flex flex-col gap-y-3 rounded-md shadow-md border-black/10 border"
            }
        >
            <div className={"flex items-center gap-x-2"}>
                {Array.from({ length: rating }).map((_, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Star key={i} fill={"gold"} color={"gold"} />
                ))}
                <span className={"sr-only"}>{rating} stars</span>
            </div>
            <p className={"text-para"}>{review}</p>
            <div className={"flex items-center gap-x-2"}>
                <span
                    className={
                        "block aspect-square rounded-full size-10 relative bg-amber-200 md:size-11"
                    }
                >
                    <span
                        className={
                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm"
                        }
                    >
                        {userName
                            .split(" ")
                            .map((item) => item[0].toUpperCase())
                            .join("")}
                    </span>
                </span>
                <p className={"flex flex-col gap-y-1"}>
                    <span className={"font-semibold"}>{userName}</span>
                    <span className={"text-sm text-para"}>{occupation}</span>
                </p>
            </div>
        </article>
    );
};

export default ReviewCard;
