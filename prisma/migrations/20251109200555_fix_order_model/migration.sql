/*
  Warnings:

  - You are about to drop the column `Price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `idDelivered` on the `Order` table. All the data in the column will be lost.
  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "Price",
DROP COLUMN "idDelivered",
ADD COLUMN     "isDelivered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalPrice" DECIMAL(12,2) NOT NULL;
