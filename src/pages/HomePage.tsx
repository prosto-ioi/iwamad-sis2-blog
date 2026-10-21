import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function HomePage() {
  return (
    <section>
      <h1>Posts</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
