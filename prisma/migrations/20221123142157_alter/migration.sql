/*
  Warnings:

  - You are about to drop the column `orderId` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `requests` table. All the data in the column will be lost.
  - The `quantity` column on the `requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `requestId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_orderId_fkey";

-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_productId_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "requestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "requestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "requests" DROP COLUMN "orderId",
DROP COLUMN "productId",
DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER[];

-- CreateTable
CREATE TABLE "_ProductToRequest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToRequest_AB_unique" ON "_ProductToRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToRequest_B_index" ON "_ProductToRequest"("B");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToRequest" ADD CONSTRAINT "_ProductToRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToRequest" ADD CONSTRAINT "_ProductToRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
