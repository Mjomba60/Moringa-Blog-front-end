import React, { useState, useEffect } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LoginUser } from "../../api/api"
import { useNavigate } from "react-router-dom"

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export default function SignIn() {
  const [form, setForm] = useState({})
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const navigate = useNavigate()

  const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    // LoginUser = (userData, setData, setError)
    LoginUser(form, setData, setError)
  }

  useEffect(() => {
    if (data?.status === 200) {
      console.log("here")
      console.log(data.data)
      setForm({})
      setSuccess({
        responsestatusText: "Signin is successful",
        detail: `Account is ${data.statusText}`,
      })
      setTimeout(() => {
        setData({})
        navigate("/", {
          state: { user: data.data },
          replace: true,
        })
      }, 2000)
    }
  }, [navigate, error, data?.status, data?.data, data?.statusText])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }} display = {"flex"} flexDirection={"row"} justifyContent={"center"} marginTop={"32px"}>
        <CssBaseline />
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square height={"500px"}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In to your Account
            </Typography>
            {success ? (
              <Typography component="h1" variant="h5">
                {success.responsestatusText} <br /> {success.detail}
              </Typography>
            ) : (
              ""
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onchange}
                value={form.email || ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onchange}
                value={form.password || ""}
              />

              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
