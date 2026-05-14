/**
 * Database module entry point.
 *
 * Re-exports the schema namespace so that future migrations and application
 * code have a single, stable import path: `import { schema } from "@/lib/db"`.
 *
 * No drizzle.config or migration is generated for this build because the
 * canonical schema (db_schema.reference.json) declares zero tables — the spec
 * explicitly excludes persistence (idea_minimal_001).
 */

export { schema } from "./schema";
