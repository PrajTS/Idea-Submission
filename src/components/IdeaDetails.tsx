import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  Chip,
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Fab,
  Typography,
} from '@mui/material'
import { grey, pink } from '@mui/material/colors'
import { Box } from '@mui/system'
import { getIdeasList, upVote } from '@redux/slices/ideasSlice'
import { RootState } from '@redux/store'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const IdeaDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { ideaId } = router.query

  let ideasList: IIdea[] = useSelector((state: RootState) => state.ideas)

  const ideaDetails = ideasList.find((idea) => idea._id === ideaId)

  const createdDate = ideaDetails && new Date(ideaDetails?.createdAt as string)

  useEffect(() => {
    !ideasList?.length && dispatch(getIdeasList())
  }, [])

  const vote = () => {
    dispatch(
      upVote({
        isUpvote: !ideaDetails?.hasVoted,
        ideaId: ideaDetails?._id as string,
      }),
    )
  }

  return (
    <div>
      <Head>
        <title>{ideaDetails ? ideaDetails?.title : ''} | Scriptbox</title>
      </Head>
      {ideaDetails ? (
        <Box bgcolor="white" px={2}>
          <Fab
            aria-label="like"
            onClick={vote}
            sx={{
              position: 'fixed',
              bottom: { xs: 32, sm: 52 },
              right: { xs: 32, sm: 52 },
            }}
          >
            <FavoriteIcon
              sx={{ color: ideaDetails?.hasVoted ? pink[500] : grey[400] }}
            />
          </Fab>
          <Box sx={{ paddingTop: '1rem' }}>
            <Typography component="h1" variant="h2">
              {ideaDetails?.title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '0.3rem' }}>
            <Typography
              component="p"
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginTop: '1rem',
                marginBottom: '2rem',
              }}
            >
              Published on:
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginTop: '1rem',
                marginBottom: '2rem',
              }}
              color="text.secondary"
            >
              {createdDate?.toLocaleString()}
            </Typography>
          </Box>
          <Typography sx={{ textAlign: 'justify' }} mb={4}>
            {ideaDetails?.description}
          </Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              width: '100%',
              flexWrap: 'wrap',
              paddingBottom: {
                xs: 14,
                sm: 18,
                lg: 8,
              },
            }}
            mt={4}
          >
            {ideaDetails?.tags?.map((tag, index) => (
              <Chip key={index} label={tag} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}

export default IdeaDetails
