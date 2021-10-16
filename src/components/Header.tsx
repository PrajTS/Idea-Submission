import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { setUsername } from '@redux/slices/userSlice'
import { RootState } from '@redux/store'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

const Header = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setUsername(''))
  }

  const user = useSelector((state: RootState) => state.user)

  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, cursor: 'pointer' }}
            >
              Ideas Portal
            </Typography>
          </Link>

          {user && (
            <Button variant="text" sx={{ my: 1, mx: 1.5 }} onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
