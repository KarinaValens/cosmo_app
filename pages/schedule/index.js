/* import styles from '../styles/Home.module.css'
 */
export default function Schedule({data}) {

    console.log(data)
  return (
    <>
    {/* <div>
        <input className={styles.input} type="text" placeholder='Search by band name'/>
        <input className={styles.input} type="text" placeholder='FIlter by genre'/>
    </div> */}
    <div>
       
        <p> 
            start: 00:00,
            end: 02:00,
            act: orer Group
        </p>
        <h3>Midgard</h3>
        
            <ul>
              
             {data.Midgard.map(show=>{
                    return(<>
                    <h3>show</h3>
                    <li key="">starts:{show.start}</li>
                    <li key="">starts:{show.ends}</li></>)
             })}
            
            </ul>
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

	
