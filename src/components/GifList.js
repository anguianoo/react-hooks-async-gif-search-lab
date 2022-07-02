import React from "react"

export default function GifList({ gifs }) {
  let data = gifs.data

  return (
    <div>
      <ul>
        {data &&
          data.map((gif, i) => (
            <li key={i}>
              <img src={gif.images.original.url} alt="gif" />
            </li>
          ))}
      </ul>
    </div>
  )
}
