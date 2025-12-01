import {describe, it, expect} from "vitest";
import Utils from "../../src/utils/utils.ts";

describe("Utils.hexToRgba", () => {
  it("converts 6-digit hex to rgba", () => {
    expect(Utils.hexToRgba("#ffffff", 0.5))
      .toBe("rgba(255,255,255,0.5)");
  });

  it("converts 3-digit hex to rgba", () => {
    expect(Utils.hexToRgba("#0f0", 1))
      .toBe("rgba(0,255,0,1)");
  });

  it("throws error on invalid hex input", () => {
    expect(() => Utils.hexToRgba("invalidHex", 1))
      .toThrow("Bad Hex");
  });
});

describe("Utils.asArray", () => {
  it("wraps scalar into array", () => {
    expect(Utils.asArray("x")).toEqual(["x"]);
  });

  it("returns same array when input is array", () => {
    expect(Utils.asArray([1, 2])).toEqual([1, 2]);
  });

  it("returns empty array for undefined", () => {
    expect(Utils.asArray(undefined)).toEqual([]);
  });
});

describe("Utils.splitFirst", () => {
  it("splits string after first separator occurrence", () => {
    expect(Utils.splitFirst("a/b/c", "/")).toBe("b/c");
  });

  it("returns empty string when separator not found", () => {
    expect(Utils.splitFirst("abc", "/")).toBe("");
  });

  it("works with multi-character separators", () => {
    expect(Utils.splitFirst("hello--world--test", "--")).toBe("world--test");
  });
});
