'use client'

import { SiReddit } from 'react-icons/si';
import PostForm from './ui/PostForm';
import { useState } from 'react';

type Post = {
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

          <div className="posts">{/* Render posts here */}</div>
          <PostForm addPost={addPost} />
        </div>
      </main>
    </>
  );
}
