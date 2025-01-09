import { pgTable, serial, text, timestamp, foreignKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const authors = pgTable("authors", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	url: text().notNull(),
});

export const books = pgTable("books", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	description: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	authorId: integer("author_id"),
	url: text(),
}, (table) => [
	foreignKey({
			columns: [table.authorId],
			foreignColumns: [authors.id],
			name: "books_author_id_fkey"
		}),
]);
