import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import TextareaAutosize from "@mui/base/TextareaAutosize"
// import FormControlLabel from "@mui/material/FormControlLabel"
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner"
// import Checkbox from "@mui/material/Checkbox"
// import Link from "@mui/material/Link"
// import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { styled } from "@mui/system"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const EmptyTextarea = ({ onchange, val }) => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  }

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  }

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  )

  return (
    <StyledTextarea
      aria-label="minimum height"
      minRows={3}
      placeholder="Input your article details"
      name="body"
      onChange={(e) => {
        e.preventDefault()
        onchange(e)
      }}
      value={val.body ? val.body : ""}
    />
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export default function CreateArticle() {
  const [form, setForm] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    // const data = new FormData(event.currentTarget)
    console.log(form)
  }

  const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onchange3 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <DocumentScannerIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CREATE YOUR ARTICLE
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title of The Article"
            name="title"
            autoComplete="title"
            autoFocus
            value={form.title || ""}
            onChange={onchange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={form.category || ""}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="tech">Ten</MenuItem>
              <MenuItem value="food">Twenty</MenuItem>
              <MenuItem value="science">Thirty</MenuItem>
            </Select>
          </FormControl>
          <input
            type="file"
            name="image"
            value={form.image || ""}
            onChange={onchange}
          />

          <EmptyTextarea onchange={onchange3} val={form} />
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post Article
          </Button>
        </Box>
        {/* </Box> */}
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )
}
