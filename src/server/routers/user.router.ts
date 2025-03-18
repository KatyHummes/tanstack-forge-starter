import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../router';
import { UserRole, UserStatus } from '@/lib/constants';

export const userRouter = router({
  me: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.user.findUnique({
        where: { clerkId: ctx.auth.userId },
      });
    }),

  list: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    }),

  byId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input },
      });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }),

  updateProfile: protectedProcedure
    .input(z.object({
      name: z.string().min(2).max(50).optional(),
      role: z.nativeEnum(UserRole).optional(),
      status: z.nativeEnum(UserStatus).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { clerkId: ctx.auth.userId },
        data: input,
      });
    }),
});