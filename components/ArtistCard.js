import React from 'react'
import { default as NextLink } from 'next/link'
import Image from 'next/image'

import { hrefResolver, linkResolver } from '../prismic-configuration'

const ArtistCard = ({ post }) => {
  return (
    <div className="group dark:border dark:border-green-900 hover:bg-green-900 rounded-md p-8 transition duration-700 ease-in-out">
      <NextLink
        as={linkResolver(post)}
        href={hrefResolver(post)}
      >
        <a>
          <div className="flex items-center justify-center max-w-lg mx-auto mb-8">
            <Image src={post.data.profile_photo.url} alt={post.data.artist_name} width="120" height="120" className="rounded-full" />
          </div>
          <h2 className='text-gray-900 group-hover:text-white dark:text-green-100 text-xl md:text-2xl text-center'>{post.data.artist_name}</h2>
        </a>
      </NextLink>
    </div>
  )
}

export default ArtistCard