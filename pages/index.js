import Head from 'next/head'
import Days from '../components/Days'
import Header from '../components/Header'
import Stages from '../components/Stages'
import Filtering from '../components/Filtering'
import Acomodation from '../components/Acomodation'
import Lineup from '../components/Lineup'
import Bands from './bands'

export default function Home({schedule, bandsName}) {
const midgard = schedule.Midgard
console.log(midgard);
const vanaheim = schedule.Vanaheim
const jotunheim = schedule.jotunheim

  return (
    <>
     <Header />

    <div className="container">
      <Head>
      <title>The Festival | Schedule</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
      </Head>       
      <main className='main'>
        <Filtering/>
        <Days schedule={schedule}/>  
            <h3>Midgard</h3>
            <div className="show-table">  
            {schedule.Midgard.mon.map((show=>{
            //getting the data for just Monday (one day) destructuring object inside objects
            return (
              <>          
                <ul >
                    <li key="z">Act: {show.act}</li> 
                    <li key="y">starts: {show.start}</li> 
                    <li key="x">ends:{show.end}</li> 
                </ul>           
            </>
            )
            }))}</div>
                        
            <h3>Vanaheim</h3>
            <div className="show-table">  
            {schedule.Vanaheim.mon.map((show=>{
            //getting the data for just Monday (one day) destructuring object inside objects
            return (
              <>
              
                <ul >
                    <li key="z">Act: {show.act}</li> 
                    <li key="y">starts: {show.start}</li> 
                    <li key="x">ends:{show.end}</li> 
                </ul> 
              
            </>
            )
            }))}</div>

            <h3>Jotunheim</h3>
            <div className="show-table">  
            {schedule.Jotunheim.mon.map((show=>{
            //getting the data for just Monday (one day) destructuring object inside objects
            return (
              <>
              
                <ul >
                    <li key="z">Act: {show.act}</li> 
                    <li key="y">starts: {show.start}</li> 
                    <li key="x">ends:{show.end}</li> 
                </ul> 
              
            </>
            )
            }))}</div>

        <Stages/>
        <Acomodation/>
        <Lineup/>
      <h2>{bandsName}</h2>
      </main>
    </div>
    </>
  )
}


export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  
  // Return the data inside props
  return {
    props: {
      schedule: data,
    }
  }
}

