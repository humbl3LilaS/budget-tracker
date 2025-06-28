import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import type { TSignUpSchema } from "@/lib/validators";

import { Checkbox } from "@/components/ui/checkout";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { SignUpSchema } from "@/lib/validators";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PasswordField from "./password-field";

const SignUpForm = () => {
    const form = useForm<TSignUpSchema>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTAC: false,
        },
    });
    const navigate = useNavigate();
    const onSubmit = async ({ email, name, password }: TSignUpSchema) => {
        await authClient.signUp.email(
            {
                email,
                name,
                password,
            },
            {
                onSuccess: () => {
                    toast.success("Account successfully created!");
                    return navigate("/");
                },
                onError: (ctx) => {
                    toast.error(`Error creating account: ${ctx.error.message}`);
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
                    name={"name"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={"block mb-3"}>
                                Full name:
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={"Eg: Super Mario"}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"email"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={"block mb-3"}>
                                Email
                            </FormLabel>
                            <FormControl>
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
                <FormField
                    control={form.control}
                    name={"confirmPassword"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={"block mb-3"}>
                                Confirm Password
                            </FormLabel>
                            <FormControl>
                                <PasswordField
                                    onChange={field.onChange}
                                    value={field.value}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"acceptTAC"}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className={"flex items-center gap-x-2"}>
                                    <Checkbox
                                        onCheckedChange={field.onChange}
                                        checked={field.value}
                                        id={"tac"}
                                    />
                                    <Label htmlFor={"tac"}>
                                        I agree to the{" "}
                                        <Link
                                            to={"/terms-of-service"}
                                            className={"text-green-600"}
                                        >
                                            Terms of Service
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            to={"/privacy-policy"}
                                            className={"text-green-600"}
                                        >
                                            Privacy Policy
                                        </Link>
                                    </Label>
                                </div>
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
                                    <span>Creating Account....</span>
                                </>
                            )
                        : (
                                <span>Create Account</span>
                            )}
                </Button>
            </form>
        </Form>
    );
};

export default SignUpForm;
