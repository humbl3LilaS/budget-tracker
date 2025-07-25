import { z } from "zod";

import { authRouter } from "@/trpc/router/_auth";
import { budgetRouter } from "@/trpc/router/_budget";

import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
    hello: baseProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
    budget: budgetRouter,
    auth: authRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
