import { SiReddit } from 'react-icons/si';

export default function Home() {
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
          <form className="">
            <h3 className="text-xl font-semibold mb-2">Add a New Post</h3>

            <div>
              <div>
                <input
                  type="text"
                  id="post-text"
                  className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
                  placeholder="Post Text"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="post-user"
                  className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <button
              type="button"
              className="rounded-lg py-1 px-5 bg-red-600 text-xl font-semibold"
            >
              Post
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
