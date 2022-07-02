import React from "react"
import { Button } from "react-bootstrap"

export default function GifSearch({ searchTerm, setSearchTerm, handleSearch }) {
  // const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button variant="success">Find Gifs</Button>
      </form>
    </div>
  )
}
