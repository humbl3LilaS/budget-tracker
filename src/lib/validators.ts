import { z } from "zod/v4";

const password = z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, {
        message: "Password must contain at least one number",
    })
    .regex(/[^A-Z0-9]/i, {
        message: "Password must contain at least one special character",
    });

export const SignUpSchema = z
    .object({
        name: z.string().min(8, "Name must be at least 8 characters"),
        email: z.email(),
        password,
        confirmPassword: password,
        acceptTAC: z.boolean().refine((data) => data, {
            message:
                "You've to agree to the Terms of Services and Privacy Policy",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password don't match",
        path: ["confirmPassword"],
    });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
