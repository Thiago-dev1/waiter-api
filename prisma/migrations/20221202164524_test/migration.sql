/*
  Warnings:

  - You are about to drop the `_ProductToRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `requests` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `request` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductToRequest" DROP CONSTRAINT "_ProductToRequest_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToRequest" DROP CONSTRAINT "_ProductToRequest_B_fkey";

-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_orderId_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "request" JSONB NOT NULL;

-- DropTable
DROP TABLE "_ProductToRequest";

-- DropTable
DROP TABLE "requests";
