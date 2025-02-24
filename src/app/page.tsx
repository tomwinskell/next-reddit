'use client';

import { SiReddit } from 'react-icons/si';
import PostForm from './ui/PostForm';
import { useState } from 'react';
import PostList from './ui/PostList';

export type Post = {
  id: string,
  text: string;
  user: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPost(post: Post) {
    setPosts([...posts, post]);
  }

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <div className="w-3/4 p-5 overflow-hidden rounded-xl bg-white shadow-md">
          <div className="page-header">
            <div className="mb-2">
              <SiReddit className="text-red-600 text-5xl" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Project Reddit</h1>
          </div>

          <PostList posts={posts} />
          <PostForm addPost={addPost} />
        </div>
      </main>
    </>
  );
}
