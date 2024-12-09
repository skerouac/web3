/*
  Warnings:

  - You are about to drop the column `userId` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropIndex
DROP INDEX `Profile_userId_key` ON `profile`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `userId`,
    ADD COLUMN `birthday` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `profileId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_profileId_key` ON `Users`(`profileId`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
