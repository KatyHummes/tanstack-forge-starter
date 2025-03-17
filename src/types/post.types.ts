import type { RecordWithId } from './common';
import type { User } from './user';

export interface Post extends RecordWithId {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author?: User;
}