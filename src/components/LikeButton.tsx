import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

type LikeButtonProps = { postId: number }

function LikeButton({ postId }: LikeButtonProps) {
  const { likesFor, addLike } = useLikes()
  const likes = likesFor(postId)

  return (
    <Button
      variant={likes > 0 ? 'primary' : 'secondary'}
      aria-label={`Like (${likes} likes)`}
      onClick={() => addLike(postId)}
    >
      {likes > 0 ? '♥' : '♡'} {likes}
    </Button>
  )
}

export default LikeButton
