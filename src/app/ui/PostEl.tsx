import { Post } from '@/app/lib/definitions';
import Link from 'next/link';

type PostElProps = {
  post: Post;
};

export default function PostEl({
  post: { id, title, text, username },
}: PostElProps) {
  return (
    <div className="border border-slate-400 mb-3 rounded-lg px-5 py-3">
      <div className='flex flex-row justify-between'>
        <div>
        <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <div>
        {username}
        </div>
      </div>
      <p>{`${text.slice(0, 100)}...`}</p>
      <Link className='text-blue-600 underline' href={id!.toString()}>Read more</Link>
    </div>
  );
}
