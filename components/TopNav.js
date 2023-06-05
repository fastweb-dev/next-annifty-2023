import Image from 'next/image'
import Link from 'next/link'

import ThemeToggle from './ThemeToggle'

const TopNav = () => (
  <nav className='flex items-center justify-between mb-12 mx-1'>
    <div className='flex items-center'>
      <h1 className='text-2xl md:text-3xl uppercase mb-3 lg:mb-0'>
        <Link href='/'>
          <a className="flex items-center">
            <Image
              src="/annifty-logo.png"
              alt="Annifty logo"
              width={50}
              height={50}
            />
            <span className='hidden xl:block bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-900 dark:from-green-400 dark:to-blue-500 ml-3'>Annifty</span>
          </a>
        </Link>
      </h1>
    </div>

    <div className='flex items-center mr-2'>
      <ThemeToggle />
    </div>
  </nav>
)

export default TopNav