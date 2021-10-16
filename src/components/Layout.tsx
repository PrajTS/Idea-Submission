import { Container, CssBaseline, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import { checkLogin } from '@redux/slices/userSlice'
import { RootState } from '@redux/store'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Login from './Login'

const Layout: FC = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(checkLogin())
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: grey[50]
      }}
    >
      <CssBaseline />
      <Header />

      <Container component="main" maxWidth="md">
        {user ? children : <Login />}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: grey[200],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" textAlign="center" color={grey[600]}>
            By Prajwal T S
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
