-- CreateTable
CREATE TABLE "tb_user" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "tb_user_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "tb_Spirit" (
    "spiritId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tb_Spirit_pkey" PRIMARY KEY ("spiritId")
);

-- CreateTable
CREATE TABLE "tb_notation" (
    "id" TEXT NOT NULL,
    "notation" INTEGER NOT NULL,
    "userId" TEXT,
    "spiritId" TEXT,

    CONSTRAINT "tb_notation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_notation" ADD CONSTRAINT "tb_notation_spiritId_fkey" FOREIGN KEY ("spiritId") REFERENCES "tb_Spirit"("spiritId") ON DELETE SET NULL ON UPDATE CASCADE;
