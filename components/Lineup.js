import Link from 'next/link'
import React from 'react'
import Days from './Days'

function Lineup({bands}) {
  //this /bands.map makes dynamic links to open the bands pages
   return (
    <>
    <h2>Line up</h2>
    <Days/>
    <ul className='grid bands' >
    {bands.map((band) => (
          <Link key={band.name + Date.now()} href={`bands/${band.name}`}>
            <li>{band.name}</li>
          </Link>
      ))}
        </ul>

    </>
  )
}

export default Lineup