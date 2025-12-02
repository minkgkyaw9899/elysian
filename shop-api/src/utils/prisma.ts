import { PrismaPg } from "@prisma/adapter-pg";
import configs from "../configs";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = configs.dbUrl;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
