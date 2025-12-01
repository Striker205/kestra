import {describe, it, expect} from "vitest";
import {canSaveFlowTemplate} from "../../src/utils/flowTemplate.ts";

describe("canSaveFlowTemplate", () => {

  it("allows update when editing and user has permission", () => {
    const user = {
      isAllowed: () => true
    };

    const item = {namespace: "ns"};

    expect(canSaveFlowTemplate(true, user, item, "template")).toBe(true);
  });

  it("denies update if user lacks permission", () => {
    const user = {
      isAllowed: () => false
    };

    const item = {namespace: "ns"};

    expect(canSaveFlowTemplate(true, user, item, "template")).toBe(false);
  });

});
