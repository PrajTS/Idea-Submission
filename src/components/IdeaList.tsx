import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { getIdeasList, sort } from '@redux/slices/ideasSlice'
import { RootState } from '@redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IdeaCard from './IdeaCard'
import SortToolbar from './SortToolbar'

const IdeaList = () => {
  const dispatch = useDispatch()
  const ideas = useSelector((state: RootState) => state.ideas)

  useEffect(() => {
    !ideas?.length
      ? dispatch(getIdeasList())
      : dispatch(sort({ sortField: 'createdDate', isIncreasingOrder: false }))
  }, [])

  return (
    <Box mt={2}>
      <SortToolbar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ideas?.map((idea: IIdea) => (
          <Grid item xs={4} sm={4} md={4} key={idea._id}>
            <IdeaCard {...idea} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default IdeaList
