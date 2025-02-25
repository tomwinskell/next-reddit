'use server';

import sql from './db';
import { Post } from '@/app/lib/definitions';

async function createPost({ title, text, username }: Post) {
  const post = await sql`
  insert into posts
    (title, text, username)
  values
    (${title}, ${text}, ${username})
`;
  return post;
}

async function getPosts(): Promise<Post[]> {
  const posts: Post[] = await sql`
  select
    id,
    title,
    text,
    username
  from posts
  `;
  return posts;
}

export { createPost, getPosts };
