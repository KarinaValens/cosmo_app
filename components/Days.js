import {useState} from 'react';

function Days({schedule}) {
    const [filter, setFilter]=useState("");
  return (
    <ul className="grid">
    <button onClick={()=>setFilter(schedule.Midgard.mon)} className="button">Monday</button>
    <button onClick={()=>setFilter(schedule.Midgard.tue)} className="button">Thuesday</button>
    <button onClick={()=>setFilter(schedule.Midgard.wed)} className="button">Wednesday</button>
    <button onClick={()=>setFilter(schedule.Midgard.the)} className="button">Thursday</button>
    <button onClick={()=>setFilter(schedule.Midgard.fri)} className="button">Friday</button>
    <button onClick={()=>setFilter(schedule.Midgard.sat)} className="button">Saturaday</button>
    <button onClick={()=>setFilter(schedule.Midgard.sun)} className="button">Sunday</button>
    </ul>
  )
}

export default Days