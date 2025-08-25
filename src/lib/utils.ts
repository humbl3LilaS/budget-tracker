import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod/v4";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const checkStrength = (password: string) => {
    const { success: hasLengthOfEight } = z.string().min(8).safeParse(password);
    const { success: includesUppercase } = z
        .string()
        .regex(/[A-Z]/)
        .safeParse(password);
    const { success: includesLowercase } = z
        .string()
        .regex(/[a-z]/)
        .safeParse(password);
    const { success: includesNumber } = z
        .string()
        .regex(/\d/)
        .safeParse(password);
    const { success: includesSpecialChar } = z
        .string()
        .regex(/[^A-Z0-9]/i)
        .safeParse(password);

    return {
        hasLengthOfEight,
        includesLowercase,
        includesUppercase,
        includesNumber,
        includesSpecialChar,
    };
};
