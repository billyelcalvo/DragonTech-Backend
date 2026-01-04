import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
    id_user: varchar('id_user', { length: 36 }).primaryKey(),
    email: varchar('email').unique().notNull(),
    password: varchar('password', { length: 60 }).notNull(),
    stripeCustomerId: varchar('stripe_customer_id')
});