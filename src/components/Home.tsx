import axios from "axios"
import { useEffect, useState } from "react"
import MarkdownPreview from '@uiw/react-markdown-preview';

function Home() {
    const [homeContent, setHome] = useState<string>("")

    useEffect(() => {
      axios.get("/home.md")
      .then(res => {
        setHome(String(res.data))
      })
  }, [])

  return (
    <MarkdownPreview source={homeContent} style={{ padding: 16}} className="bg-[#0f1418] text-[#c9d1d9]"/>
  )
}

export default Home
