import PostEl from './PostEl';
import { Post } from '../lib/definitions';

type PostListProps = {
  posts: Post[]
}

export default function PostList({posts}: PostListProps) {
  return (
    <div className="posts mb-5">
      {[...posts].reverse().map((post) => (
          <PostEl key={post.id} post={post} />
      ))}
    </div>
  );
}
