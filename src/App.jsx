import { ThemeProvider } from "@emotion/react"
import Theme from "./components/theme/theme"
import { CssBaseline } from "@mui/material"
import PostCard from "./components/PostCard"

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <PostCard />
    </ThemeProvider>
  )
}

export default App