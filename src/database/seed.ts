import { en, Faker } from "@faker-js/faker";
import { addDays, subDays } from "date-fns";

import { db } from "@/database/drizzle";

import { budget, category, transactions } from "./schema";

const categories = [
    { name: "food", color: "#2a9d90" },
    { name: "leisure", color: "#e8c468" },
    { name: "transport", color: "#247754" },
    { name: "academic", color: "#e76e50" },
    { name: "other", color: "#f4a462" },
];
const faker = new Faker({ locale: [en] });
export const BUDGET_PLANS = [
    {
        title: "Monthly Groceries",
        description: "Budget for all grocery shopping",
        category: "Food",
        amount: 150_000,
    },
    {
        title: "Entertainment",
        description: "Movies, games, and other entertainment",
        amount: 200_000,
    },
    {
        title: "Utilities",
        description: "Electricity, water, and internet bills",
        category: "Housing",
        amount: 230_000,
    },
    {
        title: "Dining Out",
        description: "Restaurants and takeout",
        category: "Food",
        amount: 200_000,
    },
    {
        title: "Transportation",
        description: "Gas, public transit, and car maintenance",
        category: "Transport",
        amount: 120_000,
    },
];

async function cleanUp() {
    await db.delete(transactions);
    await db.delete(budget);
    await db.delete(category);
}

try {
    console.log("Seeding Start");
    console.log("Cleaning Up....");
    await cleanUp();
    console.log("Clean up finished...");

    const categoryPromises = categories.map(async (item) => {
        const data = await db
            .insert(category)
            .values({ name: item.name, color: item.color })
            .returning();
        return data[0];
    });
    const generatedCategories = await Promise.all(categoryPromises);
    const budgetPlanPromises = BUDGET_PLANS.map(async (item, idx) => {
        const categoryId = generatedCategories[idx].id;
        const data = await db
            .insert(budget)
            .values({
                categoryId,
                ...item,
                userId: "7kV6EVVd8PIAcV15HQC6j7Yy8czxrPFw",
                durationFrom: subDays(Date.now(), 60),
                durationTo: new Date(addDays(Date.now(), 30)),
            })
            .returning();
        return data[0];
    });
    const generatedBudgetPlans = await Promise.all(budgetPlanPromises);

    const generatedExpenses = generatedBudgetPlans.map(async (item) => {
        const len = faker.helpers.rangeToNumber({ min: 8, max: 10 });
        const expenses = Array.from({ length: len }, async () => {
            const amount
                = faker.helpers.rangeToNumber({ min: 8, max: 15 }) * 1000;
            return db
                .insert(transactions)
                .values({
                    userId: "7kV6EVVd8PIAcV15HQC6j7Yy8czxrPFw",
                    amount,
                    budgetId: item.id,
                    title: faker.lorem.words(2),
                    description: faker.lorem.words(3),
                    createdAt: faker.date.between({
                        from: subDays(Date.now(), 30),
                        to: Date.now(),
                    }),
                })
                .returning();
        });
        return await Promise.all(expenses);
    });
    await Promise.all(generatedExpenses);
    console.log("Seeding End");
}
catch (err) {
    console.error("Error during seeding:", err);
}
