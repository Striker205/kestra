import {describe, it, expect, vi} from "vitest";
import {waitFor} from "../../src/utils/executionUtils.ts";

describe("waitFor", () => {

  it("resolves when predicate becomes true", async () => {
    vi.useFakeTimers();

    const http = {
      get: vi.fn()
        .mockResolvedValueOnce({data: {ok: false}})
        .mockResolvedValueOnce({data: {ok: true}})
    };

    const execution = {id: "123"};

    const resultPromise = waitFor(http as any, execution as any, (d) => d.ok === true);

    // simulate time passing
    await vi.advanceTimersByTimeAsync(600);

    const result = await resultPromise;
    expect(result).toEqual({ok: true});
  });

});
