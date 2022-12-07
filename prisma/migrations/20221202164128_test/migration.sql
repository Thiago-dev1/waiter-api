/*
  Warnings:

  - Changed the type of `quantity` on the `requests` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_requestId_fkey";

-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "orderId" TEXT,
DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
