import { SiReddit } from 'react-icons/si';
import PostForm from './ui/PostForm';
import PostList from './ui/PostList';
import { getPosts } from './lib/database/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <div className="w-9/10 max-w-4xl p-5 overflow-hidden rounded-xl bg-white shadow-md">
          <div className="page-header">
            <div className="mb-2">
              <SiReddit className="text-red-600 text-5xl" />
            </div>
            <h1 className="text-3xl font-bold mb-5">Project Reddit</h1>
          </div>
          <PostList posts={posts} />
          <PostForm />
        </div>
      </main>
    </>
  );
}
