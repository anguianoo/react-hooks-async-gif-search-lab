import React from "react"

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
        <button>Search</button>
      </form>
    </div>
  )
}
