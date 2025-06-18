import type { ReactNode } from "react";

type FeatureCardProps = {
    title: string;
    logo: ReactNode;
    content: string;
};
const FeatureCard = ({ title, content, logo }: FeatureCardProps) => {
    return (
        <article
            className={
                "p-6 flex flex-col gap-y-2 rounded-md shadow-md border-black/10 border"
            }
        >
            <h3 className={"font-bold text-xl"}>
                {logo}
                <span>{title}</span>
            </h3>
            <p className={"text-para"}>{content}</p>
        </article>
    );
};

export default FeatureCard;
