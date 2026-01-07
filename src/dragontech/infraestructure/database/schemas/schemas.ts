import { double, index, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
    id_user: varchar('id_user', { length: 36 }).primaryKey(),
    email: varchar('email').unique().notNull(),
    password: varchar('password', { length: 60 }).notNull()
}, (table) => ({
    idx_email: index("idx_email").on(table.email)
}));
export const category = mysqlTable("category", {
    id_category: varchar("id_category", { length: 36 }).primaryKey(),
    category_name: varchar("category_name").notNull().unique()
});

export const product = mysqlTable("product", {
    id_product: varchar("id_product", { length: 36 }).primaryKey(),
    name_product: varchar("name_product").notNull().unique(),
    price: double("price").notNull(),
    rating: double("rating"),
    discount_price: double("discount_price"),
    id_category: varchar("id_category", { length: 36 }).references(() => category.id_category)
}, (table) => ({
    idx_price: index("idx_price").on(table.price),
    idx_rating: index("idx_rating").on(table.rating),
    idx_id_category: index("idx_id_category").on(table.id_category)
}));

export const review = mysqlTable("review", {
    id_review: varchar('id_review', { length: 36 }).primaryKey(),
    review_rating: double('review_rating'),
    comment: varchar('comment', { length: 255 })
}, (table) => ({
    idx_review_rating: index("idx_review_rating").on(table.review_rating)
}));


export const brand = mysqlTable("brand", {
    id_brand: varchar("id_brand", { length: 36 }).primaryKey(),
    brand_name: varchar("brand_name").notNull().unique()
});