/*
  Warnings:

  - You are about to drop the `notation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "notation" DROP CONSTRAINT "notation_userid_fkey";

-- DropForeignKey
ALTER TABLE "notation" DROP CONSTRAINT "notation_wineid_fkey";

-- DropTable
DROP TABLE "notation";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "wine";

-- CreateTable
CREATE TABLE "tb_user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "tb_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_wine" (
    "id" TEXT NOT NULL,
    "bread" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tb_wine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_notation" (
    "id" TEXT NOT NULL,
    "notation" INTEGER NOT NULL,
    "userid" TEXT NOT NULL,
    "wineid" TEXT NOT NULL,

    CONSTRAINT "tb_notation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_userid_fkey" FOREIGN KEY ("userid") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_wineid_fkey" FOREIGN KEY ("wineid") REFERENCES "tb_wine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
