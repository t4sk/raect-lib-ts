import { format } from "./currency";

describe("format", () => {
  test("valid code", () => {
    expect(format(12345, "NGN")).toEqual("₦ 12,345");
  });

  test("invalid code", () => {
    //@ts-ignore
    expect(() => format(100, "XXX")).toThrow();
  });

  test("USD", () => {
    expect(format(1234567, "USD")).toEqual("$ 1,234,567.00");
  });

  test("NGN", () => {
    expect(format(1234567, "NGN")).toEqual("₦ 1,234,567");
  });

  test("IDR", () => {
    expect(format(1234567, "IDR")).toEqual("Rp 1,234,567");
  });
});
