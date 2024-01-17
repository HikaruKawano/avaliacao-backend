/*
  Warnings:

  - You are about to drop the column `wineid` on the `tb_notation` table. All the data in the column will be lost.
  - You are about to drop the `tb_wine` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drinkid` to the `tb_notation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tb_notation" DROP CONSTRAINT "tb_notation_wineid_fkey";

-- AlterTable
ALTER TABLE "tb_notation" DROP COLUMN "wineid",
ADD COLUMN     "drinkid" TEXT NOT NULL;

-- DropTable
DROP TABLE "tb_wine";

-- CreateTable
CREATE TABLE "tb_drink" (
    "id" TEXT NOT NULL,
    "bread" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tb_drink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_drinkid_fkey" FOREIGN KEY ("drinkid") REFERENCES "tb_drink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
