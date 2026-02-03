/*
  Warnings:

  - Added the required column `sourceLink` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PostStats_postId_idx";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "sourceLink" TEXT NOT NULL;
