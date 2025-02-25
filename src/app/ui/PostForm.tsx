'use client';
import useFormInput from '../lib/useFormInput';
import { createPost } from '../lib/database/posts';
import { useRouter } from 'next/navigation';

export default function PostForm() {
  const titleProps = useFormInput('');
  const textProps = useFormInput('');
  const userProps = useFormInput('');
  const router = useRouter();

  async function handleClick() {
    const post = {
      title: titleProps.value,
      text: textProps.value,
      username: userProps.value,
    };
    titleProps.onChange('');
    textProps.onChange('');
    userProps.onChange('');
    await createPost(post);
    router.refresh(); 
  }

  return (
    <form>
      <h3 className="text-xl font-semibold mb-2">Add a New Post</h3>
      <div>
        <div>
          <input
            type="text"
            className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
            placeholder="Post Title"
            {...titleProps}
          />
        </div>
        <div>
          <textarea
            className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
            placeholder="Post Text"
            {...textProps}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
            placeholder="Your Name"
            {...userProps}
          />
        </div>
      </div>

      <button
        type="button"
        className="rounded-lg py-1 px-5 bg-red-600 text-xl font-semibold"
        onClick={handleClick}
      >
        Post
      </button>
    </form>
  );
}
