import useFormInput from '../lib/useFormInput';

type Post = {
  text: string;
  user: string;
};

type PostFormProps = {
  addPost: (post: Post) => void;
};

export default function PostForm({ addPost }: PostFormProps) {
  const textProps = useFormInput('');
  const userProps = useFormInput('');

  function handleClick() {
    const post = {
      text: textProps.value,
      user: userProps.value,
    };
    addPost(post);
    textProps.onChange('');
  }


  return (
    <form>
      <h3 className="text-xl font-semibold mb-2">Add a New Post</h3>

      <div>
        <div>
          <input
            type="text"
            id="post-text"
            className="rounded-lg border p-2 mb-2 w-full bg-slate-100 placeholder-slate-500 border-slate-400"
            placeholder="Post Text"
            {...textProps}
          />
        </div>
        <div>
          <input
            type="text"
            id="post-user"
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
