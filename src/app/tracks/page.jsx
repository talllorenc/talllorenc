import HeaderBeats from '@/components/HeaderBeats/HeaderBeats'
import React from 'react'
import Link from 'next/link'

const TracksPage = () => {
  return (
    <div className='container flex flex-col items-center'>
        <span className='text-[50px]'>Tracks</span>
        <HeaderBeats/>
        <Link
          href="/playlist"
          className="mt-[40px] text-[20px] border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] flex items-center gap-1 transition-[300ms] hover:border-white "
        >
          <span>All Beats</span>
        </Link>
    </div>
  )
}

export default TracksPage