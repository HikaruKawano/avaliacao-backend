/*
  Warnings:

  - You are about to drop the column `drinkid` on the `tb_notation` table. All the data in the column will be lost.
  - You are about to drop the `tb_drink` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Spiritid` to the `tb_notation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tb_notation" DROP CONSTRAINT "tb_notation_drinkid_fkey";

-- AlterTable
ALTER TABLE "tb_notation" DROP COLUMN "drinkid",
ADD COLUMN     "Spiritid" TEXT NOT NULL;

-- DropTable
DROP TABLE "tb_drink";

-- CreateTable
CREATE TABLE "tb_Spirit" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tb_Spirit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_Spiritid_fkey" FOREIGN KEY ("Spiritid") REFERENCES "tb_Spirit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
