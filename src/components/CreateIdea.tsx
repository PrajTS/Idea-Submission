import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import { addIdea } from '@redux/slices/ideasSlice'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useDispatch } from 'react-redux'

interface IFormInput {
  title: string
  description: string
  tags: string[]
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

const topics = ['Tech', 'Business', 'Finance', 'Social', 'Political']

function getStyles(topic: string, topicName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      topicName.indexOf(topic) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const CreateIdea = () => {
  const { control, handleSubmit, setValue } = useForm()
  const theme = useTheme()
  const dispatch = useDispatch()
  const router = useRouter()

  const topicName = useWatch({
    control,
    name: 'tags',
    defaultValue: [],
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(addIdea({ idea: data, router }))
  }

  const handleChange = (event: SelectChangeEvent<typeof topicName>) => {
    const {
      target: { value },
    } = event
    setValue(
      'tags',
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <div>
      <Head>
        <title>Add Idea | Scripbox</title>
        <meta property="og:title" content="Home | Scripbox" key="title" />
      </Head>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Submit New Idea
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 3,
            maxWidth: '600px',
            minWidth: {
              xs: '100%',
              sm: '500px',
            },
          }}
        >
          <Box my={2}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Title"
                  type="text"
                />
              )}
            />
          </Box>
          <Box my={2}>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  multiline
                  label="Title"
                  type="text"
                  minRows={10}
                />
              )}
            />
          </Box>
          <Box my={2}>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="tags-label">Tags</InputLabel>
                  <Select
                    labelId="tags-label"
                    id="demo-multiple-chip"
                    {...field}
                    multiple
                    value={topicName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value: any) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {topics.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, topicName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default CreateIdea
