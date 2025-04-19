import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    if (!email) {
      console.error("getUserByEmail: No email provided");
      return null;
    }
    
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      console.log(`getUserByEmail: No user found with email ${email}`);
      return null;
    }
    
    return user;
  } catch (error) {
    console.error("getUserByEmail error:", error);
    return null;
  }
};
