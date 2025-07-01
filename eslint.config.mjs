import antfu from "@antfu/eslint-config";

export default antfu(
    {
        type: "app",
        react: true,
        typescript: true,
        formatters: true,
        yaml: true,
        stylistic: {
            indent: 4,
            semi: true,
            quotes: "double",
        },
        ignores: [".*", "package.json", "src/components/ui"],
    },
    {
        rules: {
            "ts/no-redeclare": "off",
            "ts/consistent-type-definitions": ["error", "type"],
            "no-console": ["warn"],
            "antfu/no-top-level-await": ["off"],
            "antfu/top-level-function": ["off"],
            "node/prefer-global/process": ["off"],
            "style/jsx-one-expression-per-line": ["off"],
            "style/jsx-curly-brace-presence": ["off"],
            "style/arrow-parens": ["off"],
            "perfectionist/sort-imports": [
                "error",
                {
                    tsconfigRootDir: ".",
                },
            ],
            "unicorn/filename-case": [
                "error",
                {
                    case: "kebabCase",
                    ignore: ["README.md"],
                },
            ],
            "no-restricted-imports": [
                "error",
                {
                    paths: [
                        {
                            name: "next/navigation",
                            importNames: ["Link"],
                            message:
                                "Do not import Link from next/navigation. Use react-query's Link instead.",
                        },
                        {
                            name: "next/navigation",
                            importNames: ["redirect"],
                            message:
                                "Do not import redirect() from next/navigation. Use react-query's redirect() instead.",
                        },
                    ],
                },
            ],
        },
    },
);
