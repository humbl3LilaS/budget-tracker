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

export const REVIEWS = [
    {
        rating: 5,
        review: "BudgetWise completely changed how I think about money. I've saved over $3,000 in just 6 months!",
        userName: "Sarah Martinez",
        occupation: "Marketing Manager",
    },
    {
        rating: 5,
        review: "The insights feature helped me identify spending patterns I never noticed. Highly recommend!",
        userName: "James Davis",
        occupation: "Software Engineer",
    },
    {
        rating: 5,
        review: "Simple, intuitive, and powerful. Finally a budget app that doesn't feel like work to use.",
        userName: "Amanda Lee",
        occupation: "Teacher",
    },
    {
        rating: 5,
        review: "This app completely changed the way I manage my finances. The UI is clean and intuitive!",
        userName: "Sophia Turner",
        occupation: "Product Designer",
    },
];
