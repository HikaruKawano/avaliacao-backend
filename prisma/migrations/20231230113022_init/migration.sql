-- DropForeignKey
ALTER TABLE "tb_notation" DROP CONSTRAINT "tb_notation_Spiritid_fkey";

-- DropForeignKey
ALTER TABLE "tb_notation" DROP CONSTRAINT "tb_notation_userid_fkey";

-- AlterTable
ALTER TABLE "tb_notation" ALTER COLUMN "userid" DROP NOT NULL,
ALTER COLUMN "Spiritid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_userid_fkey" FOREIGN KEY ("userid") REFERENCES "tb_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_Spiritid_fkey" FOREIGN KEY ("Spiritid") REFERENCES "tb_Spirit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
