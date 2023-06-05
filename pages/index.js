import Prismic from '@prismicio/client'

import Head from '../components/Head'
import MainContainer from '../components/MainContainer'
import TopNav from '../components/TopNav'
import ArtistList from '../components/ArtistList'
import { Client } from '../utils/prismicHelpers';

const Home = ({ posts }) => {
  if (posts) {
    return (
      <>
        <Head />

        <MainContainer isHome>
          <TopNav isHome />

          <div className='w-full p-4 mt-16 mx-auto'>
            <div>
              <h1 className='text-gray-900 dark:text-green-100 text-5xl md:text-7xl text-center mb-6'>Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-900 dark:from-green-400 dark:to-blue-500">ANNIFTY</span></h1>
              <h2 className='text-gray-800 dark:text-green-100 text-base md:text-lg text-center mb-8'>An NFT art gallery showcasing the latest artworks from NFT artists</h2>
            </div>

            <p className='text-xs text-gray-400 dark:text-gray-500 italic text-center'>DISCLAIMER: May contain artworks that are NSFW and not safe for people with motion sensitivities.</p>

            <ArtistList posts={posts} />
          </div>
        </MainContainer>
      </>
    )
  }

  return null;
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "artist"), {
      orderings: "[desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Home