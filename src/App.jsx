import { ThemeProvider } from "@emotion/react"
import Theme from "./components/theme/theme"
import { CssBaseline } from "@mui/material"
import PostCard from "./components/PostCard"
import CommentContextProvider from "./context/CommentsContextProvider"

const App = () => {
  return (
    <CommentContextProvider>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <PostCard />
      </ThemeProvider>
    </CommentContextProvider>
  )
}

export default App