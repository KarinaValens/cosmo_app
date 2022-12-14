import Link from 'next/link';
import { useRouter } from 'next/router';
import place_holder from "../public/media/place_holder.png" 
import { useState } from 'react';
import Image from 'next/image';

export default function BandsCards ({bands, schedule}) {
   /*  const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name) */
    // I need to print the correct date and time of the band paying

    const [index, setIndex]=useState(0);

       return (
    <>  
    <div className='carousel'>
    <button className='button bandbutton prev accent2 border2' onClick={()=>setIndex(count=> count - 1)}>prev</button>
         <button className='button bandbutton next accent2 border2' onClick={()=>setIndex(count=> count + 1)}>next</button>

      <div className='bands-wraper' style={{transform:`translateX(-${index * 100}%)`}}>

        <div className='bands-card'  >
          {bands.map((band) => (
            <div key={band[index]} className="single-card">            
                 <Image   src={place_holder} alt={""} width={"230"} height={"250"} priority sizes="(max-width: 700px) 100vw, 700px" />

           {/* <Image alt={band.name} src={band.logo} width={200} height={200} /> */}
          
            <div className='bandsInfo'>
            <div>
            <p className='accent1'>{band.name}</p>
            <p className='accent1'>{band.genre}</p>            
            <Link  href={`bands/${band.name}`} className='button accent1 border1 bandlink'>LEARN MORE
            </Link>
            </div>

            <div>
            <ul>
            <li className='neutral2'>Monday</li>
            <li className='neutral2'>00:00</li>
            <li className='accent7'>MIDGARD STAGE</li>
            </ul>
            </div>
            </div>
           
          </div>
      ))}
       
        </div>
      </div>
    </div>
    </>
  )
}

