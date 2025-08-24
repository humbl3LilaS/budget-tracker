import type { Control } from "react-hook-form";

import { useDebounce } from "@uidotdev/usehooks";
import { useWatch } from "react-hook-form";

import type { TSignUpSchema } from "@/lib/validators";

import PasswordStrengthCategory from "@/components/auth/password-strength-category";
import { checkStrength } from "@/lib/utils";

type PasswordGuideProps = {
    control: Control<TSignUpSchema>;
};
const PasswordGuide = ({ control }: PasswordGuideProps) => {
    const password = useWatch({
        control,
        name: "password",
    });

    const debouncedPassword = useDebounce(password, 500);
    const {
        hasLengthOfEight,
        includesLowercase,
        includesUppercase,
        includesNumber,
        includesSpecialChar,
    } = checkStrength(debouncedPassword);

    return (
        <>
            {debouncedPassword && (
                <div className={"p-4 mt-3 rounded-md bg-[#f9f9fa]"}>
                    <h4 className={"text-sm font-semibold text-gray-500"}>
                        Password Guideline:
                    </h4>
                    <ul className={"mt-3 flex flex-col gap-y-3"}>
                        <PasswordStrengthCategory
                            isStrong={hasLengthOfEight}
                            category={"At least 8 characters long"}
                        />
                        <PasswordStrengthCategory
                            isStrong={includesLowercase}
                            category={"Contains at least one lowercase letter"}
                        />
                        <PasswordStrengthCategory
                            isStrong={includesUppercase}
                            category={"Contains at least one uppercase letter"}
                        />
                        <PasswordStrengthCategory
                            isStrong={includesNumber}
                            category={"Contains at least one number"}
                        />
                        <PasswordStrengthCategory
                            isStrong={includesSpecialChar}
                            category={"Contains at least one special character"}
                        />
                    </ul>
                </div>
            )}
        </>
    );
};

export default PasswordGuide;
