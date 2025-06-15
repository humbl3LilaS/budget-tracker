import {baseProcedure, createTRPCRouter} from "@/trpc/init";

export const budgetRouter = createTRPCRouter({
    get: baseProcedure.query(() => {
        return {
            name: "Super",
            amount: 10000,
        }
    })
})