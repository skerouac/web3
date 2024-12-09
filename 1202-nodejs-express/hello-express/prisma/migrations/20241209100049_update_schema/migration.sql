-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_profileId_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `profileId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
