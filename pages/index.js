import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Schedule from '../components/Schedule'
import styles from '../styles/Home.module.css'

export default function Home({schedule}) {
const midgard = schedule.Midgard
  console.log(midgard.mon)

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
       <div className={styles.footer}>
            <h4>Monday</h4>
            <h4>Thuesday</h4>
            <h4>Wednesday</h4>
            <h4>Thursday</h4>
            <h4>Friday</h4>
            <h4>Saturaday</h4>
            <h4>Sunday</h4>
        </div>  
        <h3>Midgard</h3>
          
        {schedule.Midgard.mon.map((show=>{
        //getting the data for just Monday (one day) destructuring object inside objects
         return (
          <>
         <p key="y">starts: {show.start}</p> 
         <p key="x">ends:{show.end}</p>
         </>
         )

         }))}
          
        

          <h3>Vanaheim</h3>


          <h3>Jotunheim</h3>





      </main>


    </div>
    </>
  )
}


export async function getStaticProps() {
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