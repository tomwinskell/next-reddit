import { Post } from '../page';
import PostEl from './Post';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="posts">
      {[...posts].reverse().map((post) => <PostEl key={post.id} post={post}/>)}
    </div>
  );
}
