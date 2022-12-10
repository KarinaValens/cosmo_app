import Head from 'next/head'
import Days from '../components/Days'
import Header from '../components/Header'
import Stages from '../components/Stages'
import Filtering from '../components/Filtering'
import Acomodation from '../components/Acomodation'
import Lineup from '../components/Lineup'
import BandsCards from '../components/BandsCards'
import { useState, useEffect } from 'react'
import TicketsDiv from '../components/TicketsDiv'
import Midgard from '../components/Midgard'
import Vanaheim from '../components/Vanaheim'
import Jotunheim from '../components/Jotunheim'

export default function Home({schedule}) {
  const stages= Object.keys(schedule)

//the following line is destructuring nested object and it gives me back the content from Midgar
  const {Midgard:{mon,tue,wen,thu,fri,sat,don}} = schedule;

   const [bands, setBands]=useState([]);
  useEffect(()=>{
  async function fetchBands(){
    const res= await fetch ("http://localhost:8080/bands")
    const bands=await res.json();
    setBands(bands);
     } fetchBands()},[])



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

       <Midgard schedule={schedule}/>
       <Vanaheim schedule={schedule}/>
       <Jotunheim schedule={schedule}/>
        <Stages/>
        <Acomodation/>
        <Lineup bands={bands}/>
        {/* <BandsCards bands={bands}/> */}
        <TicketsDiv/>
                  
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



