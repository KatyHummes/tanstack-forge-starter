import type { RecordWithId } from './common.types';
import type { User } from './user.types';

export interface Post extends RecordWithId {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author?: User;
}