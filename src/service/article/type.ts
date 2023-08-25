import { User } from "../user/type";
export interface Article {
  id?: number;
  slug: string;
  bio: string;
  title: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
  authot: User;
}
