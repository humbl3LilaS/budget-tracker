import { expect, it } from "vitest";

const sum = (a: number, b: number) => a + b;

it("demo test", () => {
    expect(sum(1, 2)).toBe(3);
});
