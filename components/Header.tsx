import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex-items-start'> 
        <div className='flex flex-row items-center'>
        <SocialIcon
        url="https://twitter.com/maganga"
        fgColor='gray' 
        bgColor='transparent'
        />

        <SocialIcon
        url="https://facebook.com/maganga"
        fgColor='gray' 
        bgColor='transparent'
        />

        <SocialIcon
        url="https://github.com/maganga" 
        fgColor='gray' 
        bgColor='transparent'
        />

        <SocialIcon
        url="https://linkedin.com/maganga"
        fgColor='gray' 
        bgColor='transparent'
        />
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='tranparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </div>
    </header>
  )
}

export default Header