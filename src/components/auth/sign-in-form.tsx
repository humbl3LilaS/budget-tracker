import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import type { TSignInSchema } from "@/lib/validators";

import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { SignInSchema } from "@/lib/validators";

const SignInForm = () => {
    const form = useForm<TSignInSchema>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const navigate = useNavigate();
    const onSubmit = async (data: TSignInSchema) => {
        await authClient.signIn.email(
            {
                ...data,
            },
            {
                onSuccess: () => {
                    toast.success("Sign In successful");
                    navigate("/");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
            },
        );
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={"flex flex-col gap-y-6"}
            >
                <FormField
                    control={form.control}
                    name={"email"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={"block mb-3"}>
                                Email
                            </FormLabel>
                            <FormControl>
                                {/* @ts-expect-error super error */}
                                <Input
                                    placeholder={"Eg: super@gmail.com"}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"password"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={"block mb-3"}>
                                Password
                            </FormLabel>
                            <FormControl className={"block mt-3"}>
                                <PasswordField
                                    onChange={field.onChange}
                                    value={field.value}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    className={"mt-4 w-full bg-green-600 hover:bg-green700"}
                    type={"submit"}
                    disabled={
                        form.formState.isSubmitting || !form.formState.isValid
                    }
                >
                    {form.formState.isSubmitting
                        ? (
                                <>
                                    <Loader2
                                        className={"mr-2 inline-block animate-spin"}
                                    />
                                    <span>Signing In....</span>
                                </>
                            )
                        : (
                                <span>Sign In</span>
                            )}
                </Button>
            </form>
        </Form>
    );
};

export default SignInForm;
