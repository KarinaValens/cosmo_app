import Link from "next/link";
import { useRouter } from "next/router";
import place_holder from "../public/media/place_holder.png";
import { useState } from "react";
import Image from "next/image";

export default function BandsCards({ bands }) {
  /*  const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name) */
  // I need to print the correct date and time of the band paying

  const [index, setIndex] = useState(0);
  const url = "http://localhost:8080/";
  //const url="https://rough-snowflake-4981.fly.dev/"

  return (
    <div className="carousel">
      <button className="button bandbutton prev accent2 border2" onClick={() => setIndex((count) => count - 1)}>
        prev
      </button>
      <button className="button bandbutton next accent2 border2" onClick={() => setIndex((count) => count + 1)}>
        next
      </button>

      <div className="bands-wraper" style={{ transform: `translateX(-${index * 50}%)` }}>
        <div className="bands-card">
          {bands.map((band) => (
            <div key={`${Math.random()} + ${Date.now()}`} className="single-card">
              <Image src={`${band.logo.includes("https://") ? band.logo : url + "/logos/" + band.logo}`} alt={band.name} width={"230"} height={"250"} priority sizes="(max-width: 700px) 100vw, 700px" />

              <div className="bandsInfo">
                <div>
                  <p className="accent1">{band.name}</p>
                  <p className="accent1">{band.genre}</p>
                  <Link href={`bands/${band.name}`} className="button accent1 border1 bandlink">
                    LEARN MORE
                  </Link>
                </div>

                <div>
                  <ul>
                    <li className="neutral2">Monday</li>
                    <li className="neutral2">00:00</li>
                    <li className="accent7">MIDGARD STAGE</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
