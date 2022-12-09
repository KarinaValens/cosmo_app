import Image from "next/image"//this module automaticaly automise the img with Squoosh
import dark_theme_logo from "../public/media/dark_theme_logo.png" // it is necesary import the images as so

//the images are place in the public folder inside media

export default function Header() {
    //it is not necesary to write an unit in the the width and the heigh properties 
  return (
    <div className="header">
        <a  href={"/"}>
          <Image  className="logo" src={dark_theme_logo} alt={""} width={"80"} height={"60"} priority sizes="(max-width: 700px) 100vw, 700px" />
        </a>
        <h1 className="title">COSMOS</h1>
        <div className="grid">
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
        </div>
    </div>
  )
}

 