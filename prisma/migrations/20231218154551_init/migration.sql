-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wine" (
    "id" TEXT NOT NULL,
    "bread" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "wine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notation" (
    "id" TEXT NOT NULL,
    "notation" INTEGER NOT NULL,
    "userid" TEXT NOT NULL,
    "wineid" TEXT NOT NULL,

    CONSTRAINT "notation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "notation" ADD CONSTRAINT "notation_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notation" ADD CONSTRAINT "notation_wineid_fkey" FOREIGN KEY ("wineid") REFERENCES "wine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
