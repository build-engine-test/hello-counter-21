/**
 * Acceptance test for task-1-1: schema file compiles
 *
 * Verifies that lib/db/schema.ts and lib/db/index.ts export a typed, empty
 * schema object and that the re-export from index.ts works correctly.
 */

import { describe, it, expect } from "vitest";

describe("schema file compiles", () => {
  it("exports a typed empty schema object from schema.ts", async () => {
    const mod = await import("../lib/db/schema");
    expect(mod).toHaveProperty("schema");
    expect(typeof mod.schema).toBe("object");
    expect(mod.schema).not.toBeNull();
    // Must be empty — zero tables declared per spec
    expect(Object.keys(mod.schema)).toHaveLength(0);
  });

  it("re-exports schema namespace from index.ts", async () => {
    const mod = await import("../lib/db/index");
    expect(mod).toHaveProperty("schema");
    expect(typeof mod.schema).toBe("object");
    expect(Object.keys(mod.schema)).toHaveLength(0);
  });
});
