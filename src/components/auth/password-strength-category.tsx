import { CircleCheckBig, CircleX } from "lucide-react";

import { cn } from "@/lib/utils";

type PasswordStrengthCategoryProps = {
    isStrong: boolean;
    category: string;
};
const PasswordStrengthCategory = ({
    isStrong,
    category,
}: PasswordStrengthCategoryProps) => {
    return (
        <li className={"flex items-center gap-x-3 text-sm"}>
            <>
                {isStrong
                    ? (
                            <CircleCheckBig className={"size-4 text-green-600"} />
                        )
                    : (
                            <CircleX className={"size-4 text-red-600"} />
                        )}
            </>
            <span
                className={cn(
                    "font-semibold",
                    isStrong ? "text-green-600" : "text-red-600",
                )}
            >
                {category}
            </span>
        </li>
    );
};

export default PasswordStrengthCategory;
