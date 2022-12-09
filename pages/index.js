import Head from 'next/head'
import Image from 'next/image'
import Days from '../components/Days'
import Header from '../components/Header'
import Schedule from '../components/Schedule'
import styles from '../styles/Home.module.css'

export default function Home({schedule}) {
const midgard = schedule.Midgard
console.log(midgard);
const vanaheim = schedule.Vanaheim
const jotunheim = schedule.jotunheim

  return (
    <>
     <Header />

    <div className={styles.container}>
      <Head>
      <title>The Festival | Schedule</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
      </Head>       

       <main className={styles.main}>
        <Schedule/>
        <Days schedule={schedule}/>  
        <h3>Midgard</h3>
        <div className={styles.table}>  
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
          <div className={styles.table}>  
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
          <div className={styles.table}>  
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