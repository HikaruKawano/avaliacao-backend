/*
  Warnings:

  - You are about to drop the column `bread` on the `tb_drink` table. All the data in the column will be lost.
  - Added the required column `brand` to the `tb_drink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_drink" DROP COLUMN "bread",
ADD COLUMN     "brand" TEXT NOT NULL;