/*
  Warnings:

  - You are about to drop the column `userId` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `supplier` table. All the data in the column will be lost.
  - You are about to alter the column `registration_date` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `user_id` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `supplier` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `customer_userId_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `employee_userId_fkey`;

-- DropForeignKey
ALTER TABLE `supplier` DROP FOREIGN KEY `supplier_userId_fkey`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `supplier` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `registration_date` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `employee_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `supplier` ADD CONSTRAINT `supplier_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
