import styles from '../styles/Home.module.css'

export default function Schedule({data}) {

    console.log(data)
  return (
    <div>
        <input className={styles.input} type="text" placeholder='Search by band name'/>
        <input className={styles.input} type="text" placeholder='FIlter by genre'/>
    </div>
  
  )
}



	
