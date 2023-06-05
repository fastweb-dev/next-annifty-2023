import React from 'react'
import ArtistCard from './ArtistCard'

const ArtistList = ({ posts }) => {
  return (
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 mx-auto mt-24">
      {posts.map((post) => (
        <ArtistCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default ArtistList