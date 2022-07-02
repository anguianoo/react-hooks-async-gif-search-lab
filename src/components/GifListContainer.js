import React, { useState } from "react"
import GiftList from "./GifList"
import GiftSearch from "./GifSearch"
const api_key = "YmxlFLp78E0KUHOiAPwKKKUFQtAF3PoY"
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&rating=g&limit=3&q=`

export default function GifListContainer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [gifs, setGifs] = useState([])

  async function handleSearch(e) {
    e.preventDefault()

    fetch(url + searchTerm)
      .then(res => res.json())
      .then(data => setGifs(data))
    console.log(gifs)
    

    setSearchTerm("")
    
  }

  return (
    <div>
      <GiftSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {gifs && <GiftList gifs={gifs} />}
    </div>
  )
}
