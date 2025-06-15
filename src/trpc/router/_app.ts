import {z} from 'zod';
import {baseProcedure, createTRPCRouter} from '../init';
import {budgetRouter} from "@/trpc/router/_budget";

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
});
// export type definition of API
export type AppRouter = typeof appRouter;