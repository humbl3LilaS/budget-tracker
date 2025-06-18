import { Banknote, ChartColumn, PieChart, Target } from "lucide-react";

export const FEATURES = [
    {
        title: "Expense Tracking",
        content:
            "Automatically categorize and track all your expenses with smart AI-powered recognition.",
        logo: <PieChart className={"text-cta font-bold size-12"} />,
    },
    {
        title: "Budget Goals",
        content:
            "Set realistic budgets for different categories and get alerts when you're close to limits.",
        logo: <Target className={"text-cta font-bold size-12"} />,
    },
    {
        title: "Financial Insights",
        content:
            "Get detailed reports and insights about your spending patterns and financial health.",
        logo: <ChartColumn className={"text-cta font-bold size-12"} />,
    },
    {
        title: "Savings Goals",
        content:
            "Set and track progress toward your savings goals with visual progress indicators.",
        logo: <Banknote className={"text-cta font-bold size-12"} />,
    },
];
