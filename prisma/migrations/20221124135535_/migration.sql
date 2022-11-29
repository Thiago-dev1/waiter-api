/*
  Warnings:

  - You are about to drop the column `products` on the `order` table. All the data in the column will be lost.
  - Added the required column `requestId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "products",
ADD COLUMN     "requestId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "requests" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER[],

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

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
