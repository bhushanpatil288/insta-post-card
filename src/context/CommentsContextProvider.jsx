import { createContext,useEffect,useState } from "react";
import { comments } from "../constants/data";

export const CommentContext = createContext(null);

const CommentContextProvider = ({children})=>{
  const [lComments, setLComments] = useState(JSON.parse(localStorage.getItem("comments")) || comments)

  useEffect(()=>{
    localStorage.setItem("comments", JSON.stringify(lComments))
  }, [lComments])
  return(
    <CommentContext.Provider  value={{lComments, setLComments}} >
        {children}
    </CommentContext.Provider>
  )
}

export default CommentContextProvider