import IdeaDetailsComp from '@components/IdeaDetails'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { RootState } from '@redux/store'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const IdeaDetails = () => {
  const router = useRouter()

  const { ideaId } = router.query

  const ideaDetails = useSelector((state: RootState) =>
    state.ideas.find((idea) => idea._id === ideaId),
  )

  return (
    <div>
      <Head>
        <title>Idea | {ideaDetails?.title || ''}</title>
      </Head>
      <IdeaDetailsComp />
    </div>
  )
}

export default IdeaDetails
