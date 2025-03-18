import type { AuthUser } from './auth.types';
import type { RecordWithId } from './common.types';
import type { Post } from './post.types';

export interface UserProfile extends RecordWithId {
  userId: string;
  bio?: string;
  avatar?: string;
  location?: string;
  website?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface User extends AuthUser {
  profile?: UserProfile;
  posts?: Post[];
}