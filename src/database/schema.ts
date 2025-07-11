import {
    integer,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";

import { user } from "@/database/auth-schema";

/*
 * Budget Management Related Tables
 * */

export const category = pgTable("category", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    name: varchar("category", { length: 255 }).notNull().unique(),
    color: varchar({ length: 7 }).notNull(),
    userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
});

export const budget = pgTable("budget", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    userId: text("user_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    amount: integer("amount").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    categoryId: uuid("category_id")
        .references(() => category.id)
        .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
    durationFrom: timestamp("duration_from", { withTimezone: true })
        .defaultNow()
        .notNull(),
    durationTo: timestamp("duration_to", { withTimezone: true }).notNull(),
});

export const transactions = pgTable("transaction", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    userId: text("user_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    budgetId: uuid("budget_id")
        .references(() => budget.id, { onDelete: "cascade" })
        .notNull(),
    amount: integer("amount").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
});
