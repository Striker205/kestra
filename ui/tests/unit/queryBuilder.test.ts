import {describe, it, expect} from "vitest";
import QueryBuilder from "../../src/utils/queryBuilder.js";

describe("QueryBuilder", () => {

  it("split removes non-alphanumeric separators", () => {
    const result = QueryBuilder.split("hello-world__test!!123");
    expect(result).toEqual(["hello-world__test", "123"]);
  });

  it("toLucene builds correct lucene query for single term", () => {
    const result = QueryBuilder.toLucene("hello");
    expect(result).toContain("(hello)^5");     // boost logic
    expect(result).toContain("(*hello*)^3");   // wildcard part
  });

  it("toTextLucene joins words with AND", () => {
    const result = QueryBuilder.toTextLucene("hello world");
    expect(result).toBe("(hello AND world)");
  });

  it("iso converts numeric timestamp string to ISO", () => {
    const iso = QueryBuilder.iso("1700000000000");
    expect(iso).toMatch(/T\d{2}:\d{2}:\d{2}/);
  });
});
