import React from 'react'
import Image from 'next/image'

import { queryRepeatableDocuments } from '../utils/queries'
import { Client } from '../utils/prismicHelpers';
import Head from '../components/Head'
import MainContainer from '../components/MainContainer'
import TopNav from '../components/TopNav'
import OpenSeaCollectionData from '../components/OpenSeaCollectionData';

const Post = ({ post }) => {
  if (post && post.data) {
    return (
      <>
        <Head title={post.data.artist_name} />

        <MainContainer>
          <TopNav />

          <div className='md:w-8/12 lg:w-full p-4 mt-16 mx-auto'>
            <div className="max-w-screen-lg mx-auto mb-16">
              <div className="flex items-center justify-center max-w-lg mx-auto mb-8">
                <Image src={post.data.profile_photo.url} alt={post.data.artist_name} width="120" height="120" className="rounded-full" />
              </div>
              <h2 className='text-gray-900 dark:text-green-100 text-2xl md:text-4xl text-center mb-6'>{post.data.artist_name}</h2>
              {post.data.short_bio
                ?
                <p className='max-w-xl text-gray-800 dark:text-green-100 text-base text-center mb-8 mx-auto'>{post.data.short_bio}</p>
                :
                null
              }
            </div>

            <OpenSeaCollectionData ownerAddress={post.data.owner_address} />
          </div>
        </MainContainer>
      </>
    )
  }

  return null;
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("artist", params.uid, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'artist')
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true,
  }
}

export default Post