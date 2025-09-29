import React from 'react'
import Link from 'next/link'
import { lexendDeca } from './font'

const Addjob = () => {
  return (
      <>
          <div className={`px-3 cursor-pointer bg-white text-black font-bold hover:transition hover:scale-110 mx-4 my-2 rounded-md py-4 border border-black w-fit ${lexendDeca.className}`}>
              <Link href={'/create-job'} className=''>
              Create New Job 
          </Link>
          </div>

      </>
  )
}

export default Addjob
