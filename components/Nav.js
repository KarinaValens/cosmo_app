import Anchor from "./Anchor";



export default function Nav() {
  return (
    <>
    <nav className="nav">
        <ul>
            <Anchor href={"/"}>Home</Anchor>
            <Anchor href={"/bands"}>Bands</Anchor>
            <Anchor href={"/stages"}>Stages</Anchor>
            <Anchor href={"/acomodation"}>Acomodation</Anchor>
        </ul>
    </nav>   
    
    </>  )
}

 