import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from '@mui/material'
import { grey, pink } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { upVote } from '@redux/slices/ideasSlice'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
})

const IdeaCard: FC<IIdea> = ({
  title,
  description,
  tags,
  votes,
  _id,
  hasVoted,
  createdAt,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const vote = () => {
    dispatch(upVote({ isUpvote: !hasVoted, ideaId: _id as string }))
  }

  const createdDate = new Date(createdAt as string)

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.multiLineEllipsis}
          sx={{ minHeight: '2.5rem' }}
        >
          {description}
        </Typography>
        {tags?.length && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.2rem',
              overflowX: 'auto',
            }}
            mt={2}
          >
            {tags?.map((tag, index) => (
              <Chip key={index} label={tag} size="small" />
            ))}
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Link href={`/ideas/${_id}`} passHref>
          <Button>View More</Button>
        </Link>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: '1rem',
            flexGrow: 1,
          }}
        >
          <Typography
            component="div"
            color="text.secondary"
            sx={{ fontSize: 14 }}
          >
            {votes}
          </Typography>
          <IconButton aria-label="up vote" onClick={vote}>
            <FavoriteIcon sx={{ color: hasVoted ? pink[500] : grey[400] }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            component="div"
            color="text.secondary"
            sx={{ fontSize: 14, justifySelf: 'flex-end' }}
          >
            {createdDate.toLocaleDateString('en-US')}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}

export default IdeaCard
