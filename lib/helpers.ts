import prisma from "@/prisma";

export const connectToprisma = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error, "cannot connect to database");

    throw new Error("err");
  }
};
