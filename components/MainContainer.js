import { ThemeProvider } from './ThemeContext'
import Background from './Background'
import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top"

const buttonStyle = 'border border-gray-400 hover:border-green-800 text-gray-400 hover:text-green-800 dark:border-gray-500 dark:hover:border-green-300 dark:text-gray-500 dark:hover:text-green-300 px-6 py-2 mb-12'

const MainContainer = ({ children, isHome }) => (
  <ThemeProvider>
    <Background>
      <main className='min-h-screen w-full pt-6 pb-12 px-4'>
        {children}
      </main>

      {isHome ? null : <ScrollToTop smooth color='green' />}

      <footer className='w-11/12 lg:w-8/12 xl:max-w-screen-xl flex flex-col items-center py-12 mx-auto'>
        {isHome
          ?
          null
          :
          <Link href='/'>
            <button className={buttonStyle}>
              <h2 className='text-sm'>
                Home
              </h2>
            </button>
          </Link>
        }
        <p className='text-gray-600 text-xs text-center mb-2'>ANNIFTY</p>
        <p className='text-gray-600 text-xs text-center'>Made by <a href='https://www.dapproi.com'>DappROI</a>. Powered by <a href='https://opensea.io?ref=0x33a2e518374715dceac8c8477e7c579d244e7eb7'>OpenSea</a>.</p>
      </footer>
    </Background>
  </ThemeProvider>
)

export default MainContainer