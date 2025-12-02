export default {
	port: process.env.PORT ?? 3000,
	jwtSecret: process.env.JWT_SECRET ?? "jwt secrets",
	dbUrl: process.env.DATABASE_URL ?? "db_url",
};
