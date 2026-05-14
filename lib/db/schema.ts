/**
 * Drizzle ORM schema — intentionally empty.
 *
 * The spec (idea_minimal_001) explicitly excludes persistence:
 *   "No database, no auth, no persistence. Counter resets on refresh."
 *
 * Therefore db_schema.reference.json declares zero tables for this build.
 * No drizzle.config or migration files are generated because there is nothing
 * to migrate. If a future build adds tables, add them here and generate a
 * migration with `drizzle-kit generate`.
 *
 * This file exists to give the project a stable, importable schema namespace
 * and to satisfy the Drizzle convention that lib/db/schema.ts is the
 * canonical schema entry point.
 */

/** All Drizzle table definitions for this build. Currently empty — see above. */
export const schema: Record<string, never> = {} as const;
