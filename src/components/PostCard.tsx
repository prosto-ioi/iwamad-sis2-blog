import { Link } from 'react-router'
import Card from './ui/Card'
import Tag from './ui/Tag'
import LikeButton from './LikeButton'
import type { Post } from '../types'

function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <ul className="tags">
        {post.tags.map((tag) => (
          <li key={tag}><Tag label={tag} /></li>
        ))}
      </ul>
      <p>{post.excerpt}</p>
      <div className="post-actions">
        <Link className="btn btn-primary" to={`/posts/${post.id}`}>Read more</Link>
        <LikeButton postId={post.id} />
      </div>
    </Card>
  )
}

export default PostCard
