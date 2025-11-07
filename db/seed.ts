import { prisma } from "./prisma";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not found");
  process.exit(1);
}

async function main() {
  const { default: sampleData } = await import("./sample-data");

  // Products
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });

  // Accounts
  await prisma.account.deleteMany();

  // Session
  await prisma.session.deleteMany();

  // Verification token
  await prisma.verificationToken.deleteMany();

  // Users
  await prisma.user.deleteMany();
  await prisma.user.createMany({ data: sampleData.users });

  console.log("Database seeded successfully");
}

main().catch(console.error);
