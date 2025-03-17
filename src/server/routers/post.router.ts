import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../router';

export const postRouter = router({
  list: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
      });
    }),

  byId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input },
      });
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    }),

  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1).max(100),
      content: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          ...input,
          authorId: ctx.auth.userId,
        },
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      title: z.string().min(1).max(100).optional(),
      content: z.string().min(1).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.prisma.post.update({
        where: { id },
        data,
      });
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.delete({
        where: { id: input },
      });
    }),
});