import Link from 'next/link';
import { useRouter } from 'next/router';
import place_holder from "../public/media/place_holder.png" 

import Image from 'next/image';

export default function BandsCards ({bands, schedule}) {
   /*  const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name) */
    
    return (
    <> 
    <div className='bands-card'>  
    <div className='grid' >
    {bands.map((band) => (
          <Link key={band.name + Date.now()} href={`bands/${band.name}`}>
            
           <Image   src={place_holder} alt={""} width={"200"} height={"250"} priority sizes="(max-width: 700px) 100vw, 700px" />

           {/* <Image alt={band.name} src={band.logo} width={200} height={200} /> */}
          
            <div className='bandsInfo'>
            <div>
            <h5 className='accent1'>{band.name}</h5>
            <p className='accent1'>{band.genre}</p>            
            {/* <h4>About {band.name}</h4>
            <p>{band.bio}</p> */}
            <button className='button accent1 border1'>LEARN MORE</button>

            </div>

            <div>
            <ul>
            <li className='neutral2'>Monday</li>
            <li className='neutral2'>00:00</li>
            <li className='accent7'>MIDGARD STAGE</li>
            </ul>
            </div>
            </div>
          </Link>
      ))}
       
        </div>
       
        </div>
    </>
  )
}
