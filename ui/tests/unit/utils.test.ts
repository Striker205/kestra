import {describe, it, expect} from "vitest";
import Utils from "../../src/utils/utils.ts";

describe("Utils.extractFileNameFromContentDisposition", () => {

  it("extracts UTF-8 encoded filename", () => {
    const header = "attachment; filename*=UTF-8''hello%20world.txt";
    expect(Utils.extractFileNameFromContentDisposition(header))
      .toBe("hello world.txt");
  });

  it("returns null when header malformed", () => {
    expect(Utils.extractFileNameFromContentDisposition("foo bar"))
      .toBeNull();
  });

});
