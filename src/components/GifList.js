import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

export default function GifList({ gifs }) {
  let data = gifs.data

  return (
    <ListGroup>
      <ul>
        {data &&
          data.map((gif, i) => (
            <li key={i}>
              <img src={gif.images.original.url} alt="gif" />
            </li>
          ))}
      </ul>
    </ListGroup>
  )
}
