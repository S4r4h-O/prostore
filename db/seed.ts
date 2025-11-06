import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not found");
  process.exit(1);
}

async function main() {
  const { prisma } = await import("./prisma");
  const { default: sampleData } = await import("./sample-data");

  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully");
  console.log("Products count:", await prisma.product.count());
}

main().catch(console.error);
