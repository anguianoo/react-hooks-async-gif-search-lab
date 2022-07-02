import React, { useState } from "react"
import GiftList from "./GifList"
import GiftSearch from "./GifSearch"
import { Row, Col } from "react-bootstrap"

const api_key = "YmxlFLp78E0KUHOiAPwKKKUFQtAF3PoY"
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&rating=g&limit=3&q=`

export default function GifListContainer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [gifs, setGifs] = useState([])

  async function handleSearch(e) {
    e.preventDefault()
    console.log("search ran")
    fetch(url + searchTerm)
      .then(res => res.json())
      .then(data => setGifs(data))
    console.log(gifs)

    setSearchTerm("")
  }

  return (
    <div>
      <Row>
        <Col>
          <GiftSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </Col>
      </Row>
      <Row>{gifs && <GiftList gifs={gifs} />}</Row>
    </div>
  )
}
