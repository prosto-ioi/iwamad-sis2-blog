import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

function PostPage() {
  const { id } = useParams()
  const postId = Number(id)
  const post = posts.find((p) => p.id === postId)

  if (!post) {
    return (
      <section className="page">
        <h1>Post not found</h1>
        <p>There is no post with id “{id}”.</p>
        <Link to="/">← Back to posts</Link>
      </section>
    )
  }

  return (
    <article className="page">
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <p>{post.body}</p>
      <LikeButton postId={post.id} />
      <p><Link to="/">← Back to posts</Link></p>
    </article>
  )
}

export default PostPage
