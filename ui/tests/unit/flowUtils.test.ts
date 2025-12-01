import {describe, it, expect} from "vitest";
import FlowUtils from "../../src/utils/flowUtils.js";

describe("FlowUtils", () => {

  it("findTaskById finds a nested task", () => {
    const flow = {
      steps: [
        {type: "task", id: "A"},
        {type: "task", id: "B"},
        {nested: {type: "task", id: "C"}}
      ]
    };

    const result = FlowUtils.findTaskById(flow, "C");
    expect(result).toEqual({type: "task", id: "C"});
  });

  it("findTaskById returns undefined when not found", () => {
    const flow = {steps: [{type: "task", id: "A"}]};
    const result = FlowUtils.findTaskById(flow, "XYZ");
    expect(result).toBeUndefined();
  });
});
