import styles from '../styles/Home.module.css'
import {useState} from 'react';

function Days({schedule}) {
    const [filter, setFilter]=useState("");
  return (
    <ul className={styles.footer}>
    <button onClick={()=>setFilter(schedule.Midgard.mon)} className={styles.button}>Monday</button>
    <button onClick={()=>setFilter(schedule.Midgard.tue)} className={styles.button}>Thuesday</button>
    <button onClick={()=>setFilter(schedule.Midgard.wed)} className={styles.button}>Wednesday</button>
    <button onClick={()=>setFilter(schedule.Midgard.the)} className={styles.button}>Thursday</button>
    <button onClick={()=>setFilter(schedule.Midgard.fri)} className={styles.button}>Friday</button>
    <button onClick={()=>setFilter(schedule.Midgard.sat)} className={styles.button}>Saturaday</button>
    <button onClick={()=>setFilter(schedule.Midgard.sun)} className={styles.button}>Sunday</button>
    </ul>
  )
}

export default Days