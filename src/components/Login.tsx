import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { setUsername } from '@redux/slices/userSlice'
import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'

const Login = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const empId = data.get('empId')
    if (empId) {
      dispatch(setUsername(empId as string))
    }
  }

  return (
    <>
      <Head>
        <title>Login | Scripbox</title>
        <meta property="og:title" content="Home | Scripbox" key="title" />
      </Head>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Enter Employee ID
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="empId"
              label="Employee Id"
              name="empId"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Login
