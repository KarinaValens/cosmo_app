import{useRouter} from "next/router"
import Image from "next/image"//this module automaticaly automise the img with Squoosh
import dark_theme_logo from "/public/media/dark_theme_logo.png" 
import instagram from "/public/media/instagram.png" 
import facebook from "/public/media/facebook.png" 
import youtube from "/public/media/youtube.png" 



export default function Band ({bands}) {
    const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name)
 console.log(band)
    
    return (
    <> 
    <div className="bandpage"> 
          <div className="bandPageHero"> 
        <h1 className="bandPageTitle accent1">{band.name}</h1>
{/*     <Image alt={band.name} src={band.logo} width={200} height={200} /> */}  
        {/* if(band.logo){
                  <Image  src={`https://rough-snowflake-${4981.fly.dev/bands}/logo/${png}`} alt={""} width={"80"} height={"60"} priority sizes="(max-width: 700px) 100vw, 700px" /> 
        }*/}  
        
        <img  src={band.logo} alt={""} width={"140"} height={"140"} priority sizes="(max-width: 700px) 100vw, 700px" /> 
         

  <h4 className="accent1">Band`s Members</h4> 
        <ul>
          {band.members.map((member,index)=>{
          return <li key={index}>{member}</li>
          })}
        </ul>
         <p className="accent3">{band.logoCredits}</p>
          </div>
          <div className="container showDate">
              <a  href={"/"}>
                <Image  className="logo" src={dark_theme_logo} alt={""} width={"80"} height={"60"} priority sizes="(max-width: 700px) 100vw, 700px" />
              </a>
              <h2>20 DEC</h2>
              <p>MIDGARD STAGE</p>
              <div className="iconContainer"> 
              <Image src={instagram} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
              <Image src={facebook} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
              <Image src={youtube} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
              </div>
          </div>
    </div>
    <div className="bandBio">    
      <h4>About {band.name}</h4>
      <p>{band.bio}</p>
    </div>
    </>
  )
}



export async function getStaticPaths(){
  //const res = await fetch("http://localhost:8080/bands#");
  const res = await fetch("https://rough-snowflake-4981.fly.dev/bands"); //karina URL:  (just in case)
  
  const dataBands = await res.json();
  const paths = dataBands.map(band =>{
    return {
      params:{ 
        name: band.name.toString(),
      }
    }
  })

  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps(){
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */

  const res = await fetch("http://localhost:8080/bands#");
  //const res = await fetch("https://rough-snowflake-4981.fly.dev/bands"); //karina URL:  (just in case)

  const data = await res.json();

/* - we return a value for this function 
- that value is going to be an object 
- inside the object we have a props property we give the property a value
- that value is goint to be an object so we can past all the properties that we need*/
  return{
      props: { bands : data } 
  }
}
