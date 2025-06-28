import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const authRouter = createTRPCRouter({
    signIn: baseProcedure.query(async () => {}),
});
