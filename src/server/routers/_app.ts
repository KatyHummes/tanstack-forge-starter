import { router } from '../router';
import { postRouter } from './post.router';
import { userRouter } from './user.router';

export const appRouter = router({
  post: postRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;