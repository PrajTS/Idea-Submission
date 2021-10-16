import {
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { sort } from '@redux/slices/ideasSlice'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const SortToolbar = () => {
  const [sortField, setSortField] = useState<string>('createdDateLatest')
  const dispatch = useDispatch()

  const handleSortField = (
    event: React.MouseEvent<HTMLElement>,
    newSortField: string | null,
  ) => {
    if (newSortField !== null && newSortField !== sortField) {
      switch (newSortField) {
        case 'createdDateLatest':
          dispatch(sort({ sortField: 'createdDate', isIncreasingOrder: false }))
          break
        case 'createdDateOldest':
          dispatch(sort({ sortField: 'createdDate', isIncreasingOrder: true }))
          break
        case 'votesHighest':
          dispatch(sort({ sortField: 'votes', isIncreasingOrder: false }))
          break
        case 'votesLowest':
          dispatch(sort({ sortField: 'votes', isIncreasingOrder: true }))
          break
      }
      setSortField(newSortField)
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'row',
        },

        marginBottom: '1rem',
        paddingX: '1rem',
        gap: '0.5rem',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyItems: 'center',
        }}
      >
        <Typography>Sort By</Typography>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={sortField}
          exclusive
          onChange={handleSortField}
          aria-label="text alignment"
          sx={{
            backgroundColor: 'white',
          }}
        >
          <ToggleButton
            value="createdDateLatest"
            aria-label="created on latest"
          >
            Created (Latest)
          </ToggleButton>
          <ToggleButton
            value="createdDateOldest"
            aria-label="created on oldest"
          >
            Created (Oldest)
          </ToggleButton>
          <ToggleButton value="votesHighest" aria-label="votes">
            Votes (Highest)
          </ToggleButton>
          <ToggleButton value="votesLowest" aria-label="votes">
            Votes (Lowest)
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ flexGrow: { xs: 0, sm: 1 } }} />
      <Link href="/ideas/create">
        <a>
          <Button variant="outlined">Create New</Button>
        </a>
      </Link>
    </Box>
  )
}

export default SortToolbar
