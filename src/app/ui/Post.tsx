import { Post } from '../page';

type PostElProps = {
  post: Post;
};

export default function PostEl({ post: { text, user } }: PostElProps) {
  return (
    <div>
      {text} - {user}
    </div>
  );
}
