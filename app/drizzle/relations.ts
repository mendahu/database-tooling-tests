import { relations } from "drizzle-orm/relations";
import { authors, books } from "./schema";

export const booksRelations = relations(books, ({one}) => ({
	author: one(authors, {
		fields: [books.authorId],
		references: [authors.id]
	}),
}));

export const authorsRelations = relations(authors, ({many}) => ({
	books: many(books),
}));